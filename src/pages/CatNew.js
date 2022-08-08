import React, { Component } from "react";
import { Card, CardImg, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect} from 'react-router-dom'
import JOIN from "../assets/JOIN.jpg";

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
        image2: ""
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
            src={JOIN}
            style={{
              height: 700,
              width: "100%",
            }}
            />
      <Form>
        <FormGroup>
        <Label for="age">ALAIS</Label>
          <Input type="text" alais="alais" onChange={this.handleChange} />
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
         className="joinButton"
         alais="submit"
         onClick={this.handleSubmit}
         >WELCOME</Button>
         { this.state.submitted && <redirect to="/catindex"/>}


      </Form>
      </Card>
    
    );
  }
}
export default CatNew;
