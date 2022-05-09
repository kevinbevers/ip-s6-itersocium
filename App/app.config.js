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
    // ...
    extra: {
      ...Config,
    },
  };