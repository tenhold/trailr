import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { addEntryToLog } from '../helpers';
import axios from 'axios';

class TravellogForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      body: '',
    };
    this.state = this.initialState;

    this.handleChange.bind(this);
    this.submitEntry.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitEntry = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState); // Sets form back to empty strings
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className='entry-form'>
        <form>
          <FormGroup autoComplete='nope'>
            <Label>Title</Label>
            <Input
              autoComplete='off'
              type='text'
              name='title'
              id='title'
              placeholder='Enter title here'
              value={title}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup autoComplete='nope'>
            <Label>Entry</Label>
            <Input
              autoComplete='off'
              type='text'
              name='body'
              id='body'
              placeholder='Enter text here'
              value={body}
              onChange={this.handleChange}
            ></Input>
            <Button color='success' onClick={this.submitEntry} size='lg' block>
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default TravellogForm;
