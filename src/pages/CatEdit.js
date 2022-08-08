import React, { Component } from 'react'
import { Card, CardImg, Form, FormGroup, Label, Input, Button } from "reactstrap"
import { Redirect} from 'react-router-dom'
import SIGNIN from "../assets/SIGNIN.jpg"

class CatEdit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newCat: {
          alias: "",
          age: "",
          desires: "",
          pick_up_line: "",
          image: "",
          image2: ""
        },
        submitted:false
      };
    }
    handleSubmit = () => {
        this.props.updateCat(this.state.newCat, this.props.cat.id)
      }
    render() {
      return (
          
          <Card>
              <CardImg
              alt="Card image cap"
              src={SIGNIN}
              style={{
                height: 700,
                width: "100%",
              }}
              />
        <Form>
          <FormGroup>
          <Label for="age">ALAIS</Label>
            <Input type="text" alais="Alais" onChange={this.handleChange} />
            </FormGroup>
          <FormGroup>
            <Label for="age">AGE</Label>
            <Input type="text" alais="age" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="desires">DESIRES</Label>
            <Input type="text" alais="desires" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="image">PROFILE IMAGE</Label>
            <Input type="text" alais="image" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="image2">SHOWCASE IMAGE</Label>
            <Input type="text" alais="image2" onChange={this.handleChange} />
          </FormGroup>
          <p>PLEASE FILL IN THE REQUIRED INFORMATION </p>
          <p>. </p>
          <Button
           className="signinButton"
           alais="submit"
           onClick={this.handleSubmit}
           >WELCOME BACK</Button>
           {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
           
  
  
        </Form>
        </Card>
      
      );
    }
  }
export default CatEdit