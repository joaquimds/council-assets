# Council Assets Map Front End

## Requirements

- Node version 8+

## Setup

- Copy `.env.example` to `.env`, adding your Google Maps JavaScript API Key. The value for `REACT_APP_API_ROOT`
is `locahost:3001/api` if you are running the back-end project locally, and otherwise can point to the staging
or live site (e.g. `https://councilassets.joaquimdsouza.com`)
- `npm install`
- `npm start` 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
