import React, { Component } from 'react'
import {Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText, CardSubtitle, CardColumns, Button, Spinner} from 'reactstrap'
import MarvelMingleLogo from '../assets/MarvelMingleLogo.jpg'


class Home extends Component {
    render() {
        return (

<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={MarvelMingleLogo}
      style={{
        height: 700,
        width:"100%"
      }}
      
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        MarvelMingle
      </CardTitle>
      <CardText>
        
      </CardText>
      <CardText>
        <small className="text-muted">
          
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
        )
      }
    }
export default Home
