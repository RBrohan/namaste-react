import React from "react";
import { UserClass, UserClass2 } from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass />
        <UserClass2 />
      </div>
    );
  }
}

export default About;
