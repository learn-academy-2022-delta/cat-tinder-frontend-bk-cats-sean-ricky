import React, { Component } from 'react'
import {Card, CardBody, CardTitle, CardText, CardSubtitle, Button} from 'reactstrap'
import MMLL from '../assets/MMLL.png'

class Home extends Component {
    render() {
        return (
         <Card
           style={{
           width: '30rem'
  }}
>
  <img src={MMLL} alt="logo for MMLL" className="MMLL" />

         <CardBody>
         <CardTitle tag="h5">
      
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
>
         </CardSubtitle>
         <CardText>
      
         </CardText>
         <Button>
          SIGN IN
         </Button>
         </CardBody>
         </Card>
  )
 }
}
export default Home