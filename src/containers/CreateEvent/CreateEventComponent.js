import React, { Component } from 'react'
import CreateEventMutation from './mutations/createEvent'
import styles from './CreateEventComponent.module.scss'

function refreshPage() {
  window.location.reload(false);
}

class CreateEvent extends Component {

  state = {
    content: '',
    url: ''
  }

  render() {

    return (
      <div className={styles.field} >
          <input 
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
            type='text'
            placeholder='Conteúdo do Evento'
          />
        <button
          className={styles.button}
          onClick={() => this._createEvent()}
        >
          Create Event
        </button>
      </div>
    )

  }

  _createEvent = () => {
    const { content } = this.state
  CreateEventMutation(content, () => console.log(`Mutation completed`))
  }
}

export default CreateEvent