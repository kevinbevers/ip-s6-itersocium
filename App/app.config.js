import 'dotenv/config';

let Config = {
    apiUrl: undefined,

  };
  
  if (process.env.APP_ENV === 'production') {
    Config.apiUrl = 'https://api.production.com';
    Config.enableHiddenFeatures = false;
  } else if (process.env.APP_ENV === 'staging') {
    Config.apiUrl = process.env.API_URL;
  }
  
  export default {
    name: "IterSocium",
    slug: "iter-socium",
    owner: "itersocium",
    privacy: "unlisted",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#26c731"
    },
    updates: {
      "fallbackToCacheTimeout": 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#26c731"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    }, 
    extra: {
      ...Config,
    },
  };