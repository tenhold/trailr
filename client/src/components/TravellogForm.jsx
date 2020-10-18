import React, { Component } from 'react';

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
          <label>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Enter title here'
            value={title}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label>Entry</label>
          <input
            type='text'
            name='body'
            id='body'
            placeholder='Enter text here'
            value={body}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.submitEntry}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TravellogForm;
