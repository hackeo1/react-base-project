import React from 'react'
import { observerClientSingleton } from '../services/observer-client.singleton'
import 'rxjs/add/operator/map';

export default class Greeting extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      client: 'client 0'
    };
    this.clientService = observerClientSingleton;
    this.handleChange = this.handleChange.bind(this);
    this.clientChange = this.clientChange.bind(this);
    this.getClients = this.getClients.bind(this);
  }

  handleChange (event) {
    this.setState({
      name: event.target.value
    });
  }

  clientChange (client) {
    console.log(client);
    this.setState({
      client: client
    });
  }

  getClients () {
    this.clientService.getClient(true)
      .map((client) => {
        return client.name
      }).subscribe((clientName) => {
        this.clientChange(clientName)
      })
  }

  render () {
    return (
      <div>
        <h1 className='greeting'>Welcome {this.state.client} to {this.state.name || this.props.name}!</h1>
        <button type='button' onClick={this.getClients}>
          get clients
        </button>
      </div>
    )
  }
}
