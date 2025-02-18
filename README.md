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
    Source: Deploy from a branch   
    Branch:   
      Branch: gh-pages   
      Folder: / (root)   
    Click on the "Save" button   
Reference: https://github.com/gitname/react-gh-pages   



