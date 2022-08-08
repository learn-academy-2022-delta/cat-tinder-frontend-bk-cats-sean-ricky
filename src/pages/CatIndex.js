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
                    width="auto"
                    height="1250"
                    src={cat.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                    className="iiddi"
                    >
                      {cat.alias}
                      </CardTitle>
                    <CardSubtitle
                      className="iidd"
                      >
                      {cat.age}
                      </CardSubtitle>
                    <NavLink to={`/catshow/${cat.id}`}>
                      <Button
                        color="danger"
                        outline
                        size=""
                        className="indexButton"
                        alais="submit"
                        onClick={this.handleSubmit}
                      >
                        SHOOT YOUR SHOT
                      </Button>
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
