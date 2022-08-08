import React, { Component } from "react";
import { Card, CardImg, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from 'react-router-dom'
import MarvelMingleLogo from "../assets/MarvelMingleLogo.jpg";

class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCat: {
        alias: "",
        age: "",
        desires: "",
        pick_up_line: "",
        image: "",
      },
      submitted:false
    };
  }
  handleChange = (e) => {
    const { newCat } = this.state;
    newCat[e.target.alias] = e.target.value;
    this.setState({ newcat: newCat });
  };
  handleSubmit = () => {
    this.props.createNewCat(this.state.newCat)
    this.setState({ submitted: true})
  }
  render() {
    return (
        
        <Card>
            <CardImg
            alt="Card image cap"
            src={MarvelMingleLogo}
            style={{
              height: 700,
              width: "100%",
            }}
            />
      <Form>
        <FormGroup>
          <Label for="alias">ALAIS</Label>
          <Input type="text" bsSize="lg"
                 className="mb-3"
                 placeholder="" onChange={this.handleChange} />
          
                 
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
          <Label for="image">IMAGE</Label>
          <Input type="text" alais="image" onChange={this.handleChange} />
        </FormGroup>
        <Button
         alais="submit"
         onClick={this.handleSubmit}
         >SUBMIT APP</Button>
         { this.state.submitted && <redirect to="/catindex"/>}


      </Form>
      </Card>
    
    );
  }
}
export default CatNew;
