import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class Avatar extends Component {
  render() {
    const { avatarURL } = this.props;
    return (
      <Image src={avatarURL} alt={`Avatar of a user`} className="avatar" />
    );
  }
}
