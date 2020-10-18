import React, { useState, Component } from 'react';

class Travellog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { title: 'First entry', body: 'This is my journal entry.' },
        { title: 'Second entry', body: 'This is my journal entry.' },
        { title: 'Third entry', body: 'This is my journal entry.' },
      ],
    };

    this.removeEntry.bind(this);
  }

  removeEntry = (index) => {
    const { entries } = this.state;
    this.setState({
      entries: entries.filter((entry, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className='entries'>
        <LogHeader />
        <LogBody
          entryData={this.state.entries}
          removeEntry={this.removeEntry}
        />
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
