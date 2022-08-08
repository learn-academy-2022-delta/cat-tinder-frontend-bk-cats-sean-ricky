import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  NavLink,
  Button,
} from "reactstrap";
import { Redirect } from "react-router-dom";

class CatShow extends Component {
  render() {
    let { cat } = this.props;
    return (
      <>
        <Card>
          <CardImg top width="auto" src={cat.image2} alt="Card image cap" />
          <CardBody>
            <CardTitle className="showiidd">
              {cat.alias} {cat.age}
            </CardTitle>
            <CardSubtitle className="showiiddi">{cat.desires}</CardSubtitle>
            <CardText className="showiiddii">{cat.pick_up_line}</CardText>
            <NavLink to={`/catedit/${this.props.cat.id}`}>
              <Button
              className="showButton"
              >EDIT PROFILE</Button>
            </NavLink>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default CatShow;
