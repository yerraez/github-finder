Commands in order to create this project:
1. Create a react app
npx create-react-app github-finder --use-npm

2. Install the latest version of: tailwind, postcss, autoprefixer.
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

3. Install Craco,if you have a problem with the version of react-script, you can install version 4.0.0 and after that install Craco.
npm i react-scripts@4.0.0 (Only if you have problems to install craco, if you don't you can omit this command)

npm install @craco/craco 

4. Create tailwindcss file
npx tailwindcss-cli@latest init

5. Install Daisy UI
npm i daisyui