export const msalConfig = {
  auth: {
    clientId: "408ad8a0-bcc0-440b-a0fd-79d9772129b2",
    authority: "https://login.microsoftonline.com/f01f0df2-fb81-47b4-b828-92469e4c322f",
    redirectUri: "https://ALLADA-CHINMAI.github.io/MangaShelf",
  },
  cache: {
    cacheLocation: "sessionStorage", // Options: sessionStorage or localStorage
    storeAuthStateInCookie: false,  // Set to true if you face issues on IE/Edge
  },
};

