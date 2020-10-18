import React, { useState, Component } from 'react';
import TravellogForm from './TravellogForm.jsx';

class Travellog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };

    this.removeEntry.bind(this);
    this.handleSubmit.bind(this);
  }

  removeEntry = (index) => {
    const { entries } = this.state;
    this.setState({
      entries: entries.filter((entry, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (entry) => {
    this.setState({ entries: [...this.state.entries, entry] });
  };

  render() {
    return (
      <div className='entries'>
        <LogHeader />
        <LogBody
          entryData={this.state.entries}
          removeEntry={this.removeEntry}
        />
        <TravellogForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

//////////////////////////////////////////////////////////////
const LogHeader = () => {
  return <h1>Travellog</h1>;
};
//////////////////////////////////////////////////////////////
const LogBody = (props) => {
  const lines = props.entryData.map((line, index) => {
    return (
      <div key={index}>
        <h2>{line.title}</h2>
        <p>{line.body}</p>
        <button
          onClick={() => {
            props.removeEntry(index);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{lines}</div>;
};

export default Travellog;
