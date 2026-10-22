import React from "react";

export function ArrowUpRight({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

export function ArrowRight({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h16m-7-7 7 7-7 7" />
    </svg>
  );
}

export function Sparkle({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Zm7 14 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </svg>
  );
}

export function BeanMark({ size = 32, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M29.8 6.6C21.7 2.3 9.6 7 6.1 16.9 2.8 26.3 9.3 35 18 35c7.4 0 14.2-6.8 16.4-14.6 1.7-6.2.1-11-4.7-13.8Z"
        fill="currentColor"
      />
      <path
        d="M28.2 8.1C25.4 14.7 14.8 17.5 11 32.1"
        stroke="var(--bean-cut, #F6F1E8)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
