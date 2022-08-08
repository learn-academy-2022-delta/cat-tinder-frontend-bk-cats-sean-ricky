import React, { Component } from 'react'
// import NOTFOUND from '../assets/NOTFOUND.png'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import MarvelMingleLogo from "../assets/MarvelMingleLogo.jpg";

class NotFound extends Component {
  render() {
    return(
      <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={MarvelMingleLogo}
          style={{
            height: 700,
            width: "100%",
          }}
        />
        <CardImgOverlay>
          <CardTitle tag="h5">MarvelMingle</CardTitle>
          <CardText></CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
}
export default NotFound