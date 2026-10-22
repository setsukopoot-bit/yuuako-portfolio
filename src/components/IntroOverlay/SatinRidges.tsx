import { useEffect, useRef } from 'react'
import styles from './IntroOverlay.module.css'

const HEIGHT_MAP_SOURCE = '/images/intro/satin-heightmap-v1.png'

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision highp float;

  varying vec2 v_uv;
  uniform vec2 u_resolution;
  uniform vec2 u_heightMapSize;
  uniform float u_time;
  uniform float u_motion;
  uniform sampler2D u_heightMap;

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 local = fract(point);
    vec2 curve = local * local * (3.0 - 2.0 * local);

    float a = hash21(cell);
    float b = hash21(cell + vec2(1.0, 0.0));
    float c = hash21(cell + vec2(0.0, 1.0));
    float d = hash21(cell + vec2(1.0, 1.0));

    return mix(mix(a, b, curve.x), mix(c, d, curve.x), curve.y);
  }

  float fbm(vec2 point) {
    float value = 0.0;
    float amplitude = 0.52;
    mat2 octaveRotation = rotate2d(0.52);

    for (int octave = 0; octave < 5; octave++) {
      value += amplitude * valueNoise(point);
      point = octaveRotation * point * 2.03 + vec2(7.3, 3.7);
      amplitude *= 0.48;
    }

    return value;
  }

  vec2 coverUv(vec2 uv, float viewportAspect, float textureAspect) {
    vec2 scale = viewportAspect < textureAspect
      ? vec2(viewportAspect / textureAspect, 1.0)
      : vec2(1.0, textureAspect / viewportAspect);
    return (uv - 0.5) * scale + 0.5;
  }

  vec2 heightMapUv(vec2 uv) {
    float viewportAspect = u_resolution.x / max(u_resolution.y, 1.0);
    float textureAspect = u_heightMapSize.x / max(u_heightMapSize.y, 1.0);

    if (viewportAspect < 0.82) {
      float rotatedAspect = 1.0 / textureAspect;
      vec2 rotatedUv = coverUv(uv, viewportAspect, rotatedAspect);
      return vec2(rotatedUv.y, 1.0 - rotatedUv.x);
    }

    vec2 mappedUv = coverUv(uv, viewportAspect, textureAspect);
    mappedUv.x += 0.012;
    return mappedUv;
  }

  float sampleHeightMap(vec2 uv) {
    vec2 inset = 1.5 / u_heightMapSize;
    return texture2D(u_heightMap, clamp(uv, inset, 1.0 - inset)).r;
  }

  float satinHeight(vec2 screenUv) {
    float time = u_time * u_motion;
    vec2 mapUv = heightMapUv(screenUv);
    float warpA = fbm(mapUv * 3.15 + vec2(sin(time * 0.055), cos(time * 0.047)) * 0.08);
    float warpB = fbm(rotate2d(0.72) * mapUv * 3.8 + vec2(cos(time * 0.041), sin(time * 0.052)) * 0.07);
    vec2 localDeformation = vec2(
      sin(mapUv.y * 8.2 + warpA * 2.5 + time * 0.105),
      cos(mapUv.x * 7.4 + warpB * 2.2 - time * 0.086)
    ) * (0.0022 * u_motion);

    float mappedHeight = sampleHeightMap(mapUv + localDeformation);
    mappedHeight = mix(mappedHeight, smoothstep(0.018, 0.94, mappedHeight), 0.22);
    mappedHeight = pow(mappedHeight, 1.06);

    float subjectDistance = length((screenUv - vec2(0.515, 0.47)) * vec2(1.28, 1.0));
    float detailMask = mix(0.34, 1.0, smoothstep(0.18, 0.72, subjectDistance));
    float mediumDetail = (warpA - 0.5) * 0.012 + (warpB - 0.5) * 0.008;
    float fineDetail = sin(mapUv.x * 31.0 + mapUv.y * 9.0 + time * 0.043) * 0.0018;
    fineDetail += sin(mapUv.x * 18.0 - mapUv.y * 14.0 - time * 0.036) * 0.0012;

    return mappedHeight * 0.7 + (mediumDetail + fineDetail) * detailMask;
  }

  float anisotropicSpecular(
    vec3 normal,
    vec3 halfVector,
    vec3 tangent,
    float alongRoughness,
    float acrossRoughness,
    float gloss
  ) {
    vec3 projectedTangent = normalize(tangent - normal * dot(tangent, normal));
    vec3 bitangent = normalize(cross(normal, projectedTangent));
    float normalHalf = max(dot(normal, halfVector), 0.0);
    float tangentHalf = dot(halfVector, projectedTangent) / max(alongRoughness, 0.04);
    float bitangentHalf = dot(halfVector, bitangent) / max(acrossRoughness, 0.04);
    float ellipticalDistance = tangentHalf * tangentHalf + bitangentHalf * bitangentHalf;
    float directionalLobe = exp(-ellipticalDistance / max(normalHalf * normalHalf, 0.075));
    return directionalLobe * pow(normalHalf, gloss);
  }

  void main() {
    vec2 uv = v_uv;
    float stepSize = 2.8 / max(min(u_resolution.x, u_resolution.y), 360.0);
    float height = satinHeight(uv);
    float heightRight = satinHeight(uv + vec2(stepSize, 0.0));
    float heightLeft = satinHeight(uv - vec2(stepSize, 0.0));
    float heightUp = satinHeight(uv + vec2(0.0, stepSize));
    float heightDown = satinHeight(uv - vec2(0.0, stepSize));
    float xSlope = heightRight - heightLeft;
    float ySlope = heightUp - heightDown;
    float slopeScale = 8.8;
    vec2 macroGradient = vec2(xSlope, ySlope) * slopeScale;
    float macroSlope = length(macroGradient);
    vec2 fallbackFiber = normalize(vec2(0.32, 0.95));
    vec2 foldFiber = normalize(vec2(-macroGradient.y, macroGradient.x) + fallbackFiber * 0.075);
    float foldAlignment = smoothstep(0.035, 0.28, macroSlope) * 0.74;
    vec2 fiberDirection = normalize(mix(fallbackFiber, foldFiber, foldAlignment));
    vec2 fiberNormalDirection = vec2(-fiberDirection.y, fiberDirection.x);

    vec2 mappedUv = heightMapUv(uv);
    float minimumResolution = min(u_resolution.x, u_resolution.y);
    float fiberFrequency = clamp(minimumResolution * 0.275, 92.0, 310.0);
    float fiberDetail = smoothstep(245.0, 760.0, minimumResolution);
    float fiberDrift = u_time * u_motion * 0.018;
    float fiberCoordinate = dot(mappedUv, fiberNormalDirection);
    float fiberDistortion = (valueNoise(mappedUv * 15.0 + vec2(fiberDrift, -fiberDrift * 0.7)) - 0.5) * 0.014;
    float primaryFiber = sin((fiberCoordinate + fiberDistortion) * 6.2831853 * fiberFrequency + fiberDrift);
    float secondaryFiber = sin(
      (fiberCoordinate * 1.71 - fiberDistortion * 0.62) * 6.2831853 * fiberFrequency
      - fiberDrift * 0.74
    );
    float microFiberSlope = (primaryFiber * 0.68 + secondaryFiber * 0.32) * 0.0125 * fiberDetail;
    vec2 microNormalOffset = fiberNormalDirection * microFiberSlope;

    vec3 macroNormal = normalize(vec3(-macroGradient, 1.0));
    vec3 normal = normalize(vec3(macroNormal.xy + microNormalOffset, macroNormal.z));
    vec3 fiberBasis = vec3(fiberDirection, 0.0);
    vec3 fiberTangent = normalize(fiberBasis - normal * dot(fiberBasis, normal));
    float curvature = height - (heightRight + heightLeft + heightUp + heightDown) * 0.25;

    vec3 viewDirection = normalize(vec3(0.0, -0.04, 1.0));
    vec3 leftLight = normalize(vec3(-0.72, 0.44, 0.76));
    vec3 rightLight = normalize(vec3(0.68, 0.3, 0.8));
    vec3 topLight = normalize(vec3(-0.08, 0.82, 0.76));

    float leftFacing = dot(normal, leftLight);
    float rightFacing = dot(normal, rightLight);
    float topFacing = dot(normal, topLight);
    float leftDiffuse = smoothstep(0.61, 0.958, leftFacing);
    float rightDiffuse = smoothstep(0.64, 0.964, rightFacing);
    float topDiffuse = smoothstep(0.7, 0.978, topFacing);

    vec3 leftHalf = normalize(leftLight + viewDirection);
    vec3 rightHalf = normalize(rightLight + viewDirection);
    vec3 topHalf = normalize(topLight + viewDirection);
    float roughnessVariation = valueNoise(mappedUv * 9.0 + vec2(0.0, u_time * u_motion * 0.006));
    float broadAlong = mix(0.92, 0.76, roughnessVariation);
    float broadAcross = mix(0.43, 0.32, roughnessVariation);
    float coreAlong = mix(0.82, 0.68, roughnessVariation);
    float coreAcross = mix(0.22, 0.16, roughnessVariation);
    float leftBroad = anisotropicSpecular(normal, leftHalf, fiberTangent, broadAlong, broadAcross, 5.4);
    float leftSpecular = anisotropicSpecular(normal, leftHalf, fiberTangent, 0.78, 0.27, 10.5);
    float leftGlint = anisotropicSpecular(normal, leftHalf, fiberTangent, coreAlong, coreAcross, 19.0);
    float rightBroad = anisotropicSpecular(normal, rightHalf, fiberTangent, broadAlong * 0.98, broadAcross * 1.04, 5.8);
    float rightSpecular = anisotropicSpecular(normal, rightHalf, fiberTangent, 0.75, 0.29, 11.5);
    float topSpecular = anisotropicSpecular(normal, topHalf, fiberTangent, 0.7, 0.33, 13.0);

    float valley = smoothstep(0.035, 0.43, height);
    float foldDepth = mix(0.34, 1.0, valley);
    float convexRidge = smoothstep(0.00035, 0.009, curvature);
    float concaveValley = smoothstep(0.00035, 0.009, -curvature);
    float sideDistance = abs(uv.x - 0.5) * 2.0;
    float sideLight = mix(0.76, 1.12, smoothstep(0.08, 0.92, sideDistance));

    vec2 subjectOffset = (uv - vec2(0.515, 0.47)) * vec2(1.3, 1.0);
    float subjectShadow = exp(-dot(subjectOffset, subjectOffset) * 4.1);
    float lightControl = sideLight * (1.0 - subjectShadow * 0.56);
    float grazing = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.8);
    vec2 slopeDirection = normalize(normal.xy + vec2(0.0001));
    float slopeEnergy = smoothstep(0.045, 0.34, length(normal.xy));
    float leftSweep = pow(max(dot(slopeDirection, normalize(vec2(-0.82, 0.57))), 0.0), 2.6);
    float rightSweep = pow(max(dot(slopeDirection, normalize(vec2(0.76, 0.65))), 0.0), 2.9);
    float wovenSheen = slopeEnergy * (leftSweep * 0.82 + rightSweep * 0.62) * lightControl;
    float approximateShadow = mix(0.48, 1.0, smoothstep(-0.16, 0.56, max(leftFacing, rightFacing)));
    float cavityOcclusion = (1.0 - concaveValley * 0.42) * mix(0.72, 1.0, foldDepth);
    float broadSheen = (leftBroad * 0.58 + rightBroad * 0.42) * lightControl;
    float directionalSheen = (leftSpecular * 0.42 + rightSpecular * 0.3) * lightControl;
    float ridgeSheen = convexRidge * (0.015 + leftDiffuse * 0.042 + rightDiffuse * 0.03) * lightControl;
    float surfaceLift = smoothstep(0.025, 0.52, height) * (0.18 + convexRidge * 0.82) * lightControl;
    float microFiberReflection = (primaryFiber * 0.5 + 0.5) * fiberDetail;
    microFiberReflection *= broadSheen * mix(0.025, 0.065, roughnessVariation);
    float softSelfShadow = mix(1.0, 0.89, concaveValley * smoothstep(0.06, 0.34, macroSlope));

    vec3 color = vec3(0.0028, 0.0032, 0.0052);
    float diffuseLight = leftDiffuse * 0.42 + rightDiffuse * 0.31 + topDiffuse * 0.11;
    color += vec3(0.034, 0.036, 0.045) * diffuseLight * foldDepth;
    color += vec3(0.05, 0.052, 0.064) * surfaceLift * 0.32;
    color += vec3(0.3, 0.31, 0.36) * wovenSheen * 0.5 * approximateShadow;
    color += vec3(0.23, 0.24, 0.28) * broadSheen * 0.34;
    color += vec3(0.48, 0.5, 0.57) * directionalSheen * 0.78;
    color += vec3(0.38, 0.4, 0.47) * ridgeSheen;
    color += vec3(0.68, 0.7, 0.78) * leftSpecular * 0.72 * lightControl;
    color += vec3(0.94, 0.96, 1.0) * leftGlint * 0.74 * lightControl;
    color += vec3(0.48, 0.5, 0.59) * rightSpecular * 0.62 * lightControl;
    color += vec3(0.31, 0.33, 0.4) * topSpecular * 0.34;
    color += vec3(0.12, 0.13, 0.17) * grazing * 0.07 * lightControl;
    color += vec3(0.34, 0.35, 0.4) * microFiberReflection;
    color *= approximateShadow * cavityOcclusion * softSelfShadow;

    float violetSheen = rightSpecular * 0.09 + grazing * 0.032;
    violetSheen *= 0.55 + 0.45 * smoothstep(0.05, 0.92, sideDistance);
    color += vec3(0.16, 0.075, 0.24) * violetSheen;

    float rim = smoothstep(0.24, 0.78, length(normal.xy));
    color += vec3(0.055, 0.058, 0.07) * rim * foldDepth * 0.18;

    float vignette = 1.0 - smoothstep(0.28, 1.18, length((uv - 0.5) * vec2(1.08, 0.92)));
    color *= mix(0.44, 1.0, vignette);
    color *= 0.94 + 0.06 * smoothstep(-0.5, 0.55, height);
    color = 1.0 - exp(-color * 2.08);
    color = pow(color, vec3(0.96));

    gl_FragColor = vec4(color, 1.0);
  }
`

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Unable to compile the satin shader:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  if (!vertexShader || !fragmentShader) return null

  const program = gl.createProgram()
  if (!program) return null

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to link the satin shader:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }

  return program
}

function SatinRidges() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
    })

    if (!gl) {
      canvas.dataset.fallback = 'true'
      return
    }

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionPreference.matches
    let program: WebGLProgram | null = null
    let positionBuffer: WebGLBuffer | null = null
    let heightTexture: WebGLTexture | null = null
    let pendingImage: HTMLImageElement | null = null
    let resolutionUniform: WebGLUniformLocation | null = null
    let heightMapSizeUniform: WebGLUniformLocation | null = null
    let heightMapUniform: WebGLUniformLocation | null = null
    let timeUniform: WebGLUniformLocation | null = null
    let motionUniform: WebGLUniformLocation | null = null
    let frameId = 0
    let startTime = performance.now()
    let contextLost = false
    let heightMapReady = false
    let disposed = false

    canvas.dataset.fallback = 'true'
    canvas.style.opacity = '0'

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      const compactViewport = bounds.width <= 720
      const pixelRatio = Math.min(window.devicePixelRatio || 1, compactViewport ? 1 : 1.35)
      const renderScale = compactViewport ? 0.74 : 1
      const nextWidth = Math.max(1, Math.round(bounds.width * pixelRatio * renderScale))
      const nextHeight = Math.max(1, Math.round(bounds.height * pixelRatio * renderScale))

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth
        canvas.height = nextHeight
      }
    }

    const renderFrame = (timestamp: number) => {
      if (contextLost || !program || !heightTexture || !heightMapReady) return

      resizeCanvas()
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.useProgram(program)
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, heightTexture)
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height)
      gl.uniform1f(timeUniform, reducedMotion ? 0 : (timestamp - startTime) / 1000)
      gl.uniform1f(motionUniform, reducedMotion ? 0 : 1)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      if (!reducedMotion && document.visibilityState !== 'hidden') {
        frameId = window.requestAnimationFrame(renderFrame)
      }
    }

    const handleHeightMapFailure = () => {
      heightMapReady = false
      canvas.dataset.fallback = 'true'
      canvas.style.opacity = '0'
    }

    const uploadHeightMap = (image: HTMLImageElement) => {
      if (!program || contextLost || disposed) return false

      heightTexture = gl.createTexture()
      if (!heightTexture) return false

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, heightTexture)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)

      gl.useProgram(program)
      gl.uniform1i(heightMapUniform, 0)
      gl.uniform2f(heightMapSizeUniform, image.naturalWidth, image.naturalHeight)
      heightMapReady = true
      canvas.dataset.fallback = 'false'
      canvas.style.opacity = '1'
      startTime = performance.now()
      renderFrame(startTime)
      return true
    }

    const loadHeightMap = () => {
      heightMapReady = false
      const image = new Image()
      pendingImage = image
      image.decoding = 'async'
      image.onload = () => {
        if (pendingImage !== image || disposed || contextLost) return
        if (!uploadHeightMap(image)) handleHeightMapFailure()
      }
      image.onerror = handleHeightMapFailure
      image.src = HEIGHT_MAP_SOURCE
    }

    const initialiseRenderer = () => {
      program = createProgram(gl)
      if (!program) {
        handleHeightMapFailure()
        return false
      }

      positionBuffer = gl.createBuffer()
      if (!positionBuffer) {
        handleHeightMapFailure()
        return false
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      )

      const positionAttribute = gl.getAttribLocation(program, 'a_position')
      resolutionUniform = gl.getUniformLocation(program, 'u_resolution')
      heightMapSizeUniform = gl.getUniformLocation(program, 'u_heightMapSize')
      heightMapUniform = gl.getUniformLocation(program, 'u_heightMap')
      timeUniform = gl.getUniformLocation(program, 'u_time')
      motionUniform = gl.getUniformLocation(program, 'u_motion')

      gl.enableVertexAttribArray(positionAttribute)
      gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0)
      loadHeightMap()
      return true
    }

    const stopAnimation = () => window.cancelAnimationFrame(frameId)

    const restartAnimation = () => {
      stopAnimation()
      if (!reducedMotion && !contextLost && heightMapReady && document.visibilityState !== 'hidden') {
        startTime = performance.now()
        frameId = window.requestAnimationFrame(renderFrame)
      } else if (reducedMotion && !contextLost && heightMapReady) {
        renderFrame(startTime)
      }
    }

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches
      restartAnimation()
    }

    const handleVisibility = () => restartAnimation()

    const handleContextLost = (event: Event) => {
      event.preventDefault()
      contextLost = true
      heightMapReady = false
      heightTexture = null
      positionBuffer = null
      program = null
      stopAnimation()
      canvas.dataset.fallback = 'true'
      canvas.style.opacity = '0'
    }

    const handleContextRestored = () => {
      contextLost = false
      initialiseRenderer()
    }

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      if (reducedMotion && !contextLost) renderFrame(startTime)
    })

    canvas.addEventListener('webglcontextlost', handleContextLost)
    canvas.addEventListener('webglcontextrestored', handleContextRestored)
    document.addEventListener('visibilitychange', handleVisibility)
    motionPreference.addEventListener('change', handleMotionPreference)
    resizeObserver.observe(canvas)
    initialiseRenderer()

    return () => {
      disposed = true
      stopAnimation()
      if (pendingImage) {
        pendingImage.onload = null
        pendingImage.onerror = null
        pendingImage.src = ''
      }
      resizeObserver.disconnect()
      motionPreference.removeEventListener('change', handleMotionPreference)
      document.removeEventListener('visibilitychange', handleVisibility)
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      canvas.removeEventListener('webglcontextrestored', handleContextRestored)
      if (positionBuffer) gl.deleteBuffer(positionBuffer)
      if (heightTexture) gl.deleteTexture(heightTexture)
      if (program) gl.deleteProgram(program)
    }
  }, [])

  return (
    <>
      <div className={styles.satinFallback} aria-hidden="true" />
      <canvas ref={canvasRef} className={styles.satinCanvas} aria-hidden="true" />
    </>
  )
}

export default SatinRidges
