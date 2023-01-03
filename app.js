// HMR - HOT MODULE RELOAD
// file watcher algorithm C++
// bundling
// minify
// cleaning our code
// dev and production Build 
// super fast build algorithm
// image optimization
// caching while development
// compression
// comptable with the older version of browser
// https on dev
// manages the port number
// consistent hashing algorithm



// transitive dependience 

import React from 'react';
import ReactDOM from 'react-dom/client';



const heading = React.createElement("h1", { id: "first" }, "Welcome Everyone");

const heading2 = React.createElement("h1", null, "react");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);


console.log("checking what is inside heading  ", heading);

// How to Create Root we do it only ones
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
