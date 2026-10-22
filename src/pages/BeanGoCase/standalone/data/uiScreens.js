import homeScreen from "../assets/images/02-home.png";
import mapScreen from "../assets/images/03-map.png";
import scannerScreen from "../assets/images/04-menu-scan.png";
import communityScreen from "../assets/images/05-community.png";
import profileScreen from "../assets/images/06-profile.png";
import loginScreen from "../assets/beango/states/login.png";

// Original BeanGo exports. Presentation crops are applied only in CSS.
export const uiScreens = {
  home: {
    src: homeScreen,
    alt: "BeanGo 首页：Hi~Mia、搜索与四个功能入口",
    width: 716,
    height: 1450,
  },
  login: {
    src: loginScreen,
    alt: "BeanGo 登录页：咖小鸭欢迎入口",
    width: 941,
    height: 1672,
  },
  tasteMap: {
    src: mapScreen,
    alt: "BeanGo AI 口味地图：上海门店匹配与推荐卡片",
    width: 756,
    height: 1450,
  },
  scanner: {
    src: scannerScreen,
    alt: "BeanGo 拍照解菜单：菜单与豆袋模式、取景区和拍摄入口",
    width: 750,
    height: 1460,
  },
  community: {
    src: communityScreen,
    alt: "BeanGo 社区：关注、推荐、内容卡片和发布入口",
    width: 760,
    height: 1458,
  },
  profile: {
    src: profileScreen,
    alt: "BeanGo 个人中心：探索数据、口味画像与 AI 总结",
    width: 760,
    height: 1464,
  },
};
