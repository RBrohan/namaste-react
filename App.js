import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

//Nested Header Element using React.createElement
const HeaderElement = React.createElement("div", { className: "title" }, [
  React.createElement(
    "h1",
    { className: "heading1" },
    "h1 tag from React Element"
  ),
  React.createElement(
    "h2",
    { className: "heading2" },
    "h2 tag from React Element"
  ),
  React.createElement(
    "h3",
    { className: "heading3" },
    "h3 tag from React Element"
  ),
]);

// Nested Header element using Jsx
const HeaderJsx = (
  <div className="title">
    <h1>h1 tag from headerJsx</h1>
    <h2>h2 tag from headerJsx</h2>
    <h3>h3 tag from headerJsx</h3>
  </div>
);

// Nested Header Functional Component with all the tags having className attribute.
const HeaderComponent = () => {
  return (
    <div className="title">
      <h1 className="heading1">h1 tag from Functional Component</h1>
      <h2 className="heading2">h1 tag from Functional Component</h2>
      <h3 className="heading3">h3 tag from Functional Component</h3>
    </div>
  );
};

// Component Composition
const ComponentComposition = () => {
  return (
    <div className="title">
      <h1>This is Component Composition</h1>
      <HeaderComponent />
      {HeaderJsx}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
