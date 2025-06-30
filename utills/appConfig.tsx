const appConfig = {
  appName: "Eagis",
  appInDev: process.env.NEXT_PUBLIC_ENV === "development",
  appInProduction: process.env.NEXT_PUBLIC_ENV === "production",
  baseApi: process.env.NEXT_PUBLIC_BASE_API,
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://eagis.com",
  placeholderImg: "/img/no-image.png",
  dummyAvatar: "/img/dummy-avatar.jpg",
  symptomCheckerName: "Cordor",
  social: {
    telphone: "020 8574 86549",
    email: "info@eagis.com",
    email2: "contact@eagis.com",
    address: "783, second street, California, USA ",
    facebook: "https://www.facebook.com/eagis",
    insta: "https://www.instagram.com/eagis",
    pintrest: "https://www.pinterest.co.uk/eagis",
    x: "https://x.com/eagis",
    youtube: "https://www.pinterest.co.uk/eagis",
    linkedIn: "https://www.linkedin.com/company/eagis",
  },
  apps: {
    android: "https://play.google.com/store/apps/details?id=com.eagis&hl=en_US",
    ios: "https://apps.apple.com/gb/app/eagis/id6482974589",
  },
};

export default appConfig;
