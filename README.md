# MangaShelf

# Deploying React app to github pages
1. Create a React application.  
2. Push the code into a Github repository.  
3. Install Github pages using ( npm install gh-pages --save-dev )  
4. Open package.json and Add a homepage property in this format*: https://{username}.github.io/{repo-name}  
   "name": "my-app",  
   "version": "0.1.0",  
   +"homepage": "https://gitname.github.io/react-gh-pages",  
5. Add a predeploy property and a deploy property to the scripts object:   
   "scripts": {   
   +"predeploy": "npm run build",   
   +"deploy": "gh-pages -d build",   
   "start": "react-scripts start",   
   "build": "react-scripts build",   
6. Deploy using ( npm run deploy )   
7. Open Github repo, MangaShelf Repo -> Settings -> Pages ->   
   Configure the "Build and deployment" settings like this:   
    + Source: Deploy from a branch   
    + Branch:   
       - Branch: gh-pages   
       - Folder: / (root)   
    Click on the "Save" button
    Now you have a public URL of your application
Reference: https://github.com/gitname/react-gh-pages   


# Register Your Application with Google
1. Go to the Google Developer Console.
2. Create a new project and Create OAuth client ID
3. Configure consent screen - give app info, logo, authorised domains - linked to azure ids.
4. Give application type - web application, name, authorised redirect URLs - localhost:3000 and Github pages URL
5. We get Client ID and client Secret.

# Azure AD B2C Setup
1. Go to Azure Entra ID
2. Check External Identities:
   - In the left panel, click External Identities.
   - Under Identity providers, look for Google.
3. Verify Google IDP Configuration:
   - If Google is listed, click on it.
   - Check that:
      + Client ID and Client Secret are correctly set (from Google Developer Console).
      + The Redirect URI is correct.
      + The Federation Metadata URL is set (if required).
4. Open Azure AD B2C 
5. Click Create an Azure AD B2C Tenant, Fill in the Tenant Details.
6. Link the New B2C Tenant to Your Azure Subscription
    + In the Azure Portal, click your Profile Icon (Top Right).
    + Click Switch Directory and select the new B2C tenant.
    + Go to Azure AD B2C → Click Link to Subscription.
    + Choose your Subscription and Resource Group.
7. In your new Azure AD B2C tenant, go to External Identities.
    + Click Identity Providers → Add Google.
    + Enter your Google Client ID & Secret (from Google Developer Console).
    + Save the configuration.




































