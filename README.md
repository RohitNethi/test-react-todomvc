
# TodoMVC (React)

###### Description
> A simple TodoList app built using React. The app allows adding, deleting and checking completion status of todo list items.
It also shows a counter for number of items left to complete in the list.

## Getting Started

These instructions will help you get the project running on your local system.

###### Prerequisites
You need to have Node.js installed on your system.

Clone this repository using:

`git clone https://github.com/RohitNethi/test-react-todomvc.git`

Run `npm install` in the project directory on your local machine.

## Implementation

###### Folder Structure
<img src="./images/folder-struct.png" alt="folder strcuture"/>

###### Running the app
To run the app in development on local-server use:
`npm run dev`

To run the app in production mode use: 
`npm run prod`

To run the app in development mode without local-server use:
`npm run start`

To use the app, go to:
`localhost:8080` in your browser

The app uses SCSS for CSS Pre-processing. The sass files are automatically converted
to css on running the app using `Node-sass` plugin. The output css files are placed in the `Assets` folder

Webpack output's a `bundle.js` file which contains all the transpiled react and es6 code using Babel loaders.

The entry point to the app is `index.html` which refers to the `bundle.js` file, `app.css` and `base.css`.

## References

[React Documentation](https://reactjs.org/docs)

[Webpack Documentation](https://webpack.js.org/concepts/)


## Credit
Created by Rohit Nethi