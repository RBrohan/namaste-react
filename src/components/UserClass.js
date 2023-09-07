import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>UserClass </h1>
        <h2>Name: Rohan</h2>
        <h2>Location: MP</h2>
      </div>
    );
  }
}

export class UserClass2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Default location",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    const user = await fetch("https://api.github.com/users/akshaymarch7");
    const data = await user.json();

    this.setState({ userInfo: data });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>UserClass 2 </h1>
        <img src={avatar_url} style={{ height: "200px", width: "200px" }} />
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}
