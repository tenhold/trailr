import React, { Component } from 'react';
import TravellogForm from './TravellogForm.jsx';
import { Button, Col, Row, Container } from 'reactstrap';
import moment from 'moment';
import axios from 'axios';

class Travellog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };

    this.removeEntry.bind(this);
    this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/entries')
      .then((results) => {})
      .catch((err) => {});
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
    axios.post('/api/entries').then(({ id, title, text }) => {
      this.setState({ entries: [...this.state.entries, entry] });
    });
  };

  render() {
    return (
      <div className='entries'>
        <LogHeader />
        <TravellogForm handleSubmit={this.handleSubmit} />
        <h2 style={{ paddingTop: '20px', paddingBotton: '20px' }}></h2>
        <LogBody
          entryData={this.state.entries}
          removeEntry={this.removeEntry}
        />
      </div>
    );
  }
}

const LogHeader = () => {
  return (
    <div className='title-container'>
      <h2 style={{ paddingBottom: '30px', paddingTop: '10px' }}>Travellog</h2>
    </div>
  );
};
const LogBody = (props) => {
  const m = moment();
  const date = m.format('dddd, MMMM Do YYYY');
  const lines = props.entryData.map((line, index) => {
    return (
      <Container key={index} className='shadow p-3 mb-5 bg-white rounded'>
        <Row>
          <Col>
            <h2>{line.title}</h2>
            <small>{date}</small>
            <p>{line.body}</p>
            <Button
              onClick={() => {
                props.removeEntry(index);
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    );
  });
  return <div>{lines}</div>;
};

export default Travellog;
