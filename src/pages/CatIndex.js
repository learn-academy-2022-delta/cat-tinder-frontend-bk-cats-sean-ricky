import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class CatIndex extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.cats &&
            this.props.cats.map((cat) => {
              return (
                <Card key={cat.id}>
                  <CardImg
                    top
                    width="50%"
                    src={cat.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{cat.alias}</CardTitle>
                    <CardSubtitle>{cat.age}</CardSubtitle>
                    <NavLink to={`/catshow/${cat.id}`}>
                      <Button>SHOOT YOUR SHOT</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              );
            })}
        </div>
      </>
    );
  }
}
export default CatIndex;
