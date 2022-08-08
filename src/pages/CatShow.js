import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return (
      <>
        <Card>
          <CardImg top width="50%" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{cat.alias}{cat.name}</CardTitle>
            <CardSubtitle>{cat.alais}</CardSubtitle>
            <CardText>{cat.alais}</CardText>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default CatShow;
