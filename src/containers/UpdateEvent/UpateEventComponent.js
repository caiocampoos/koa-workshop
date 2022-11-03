import React, { Component } from 'react'
import styles from './UpdateEventComponent.module.scss'
import updateEventMutation from './mutations/updateEvent'

class UpdateEvent extends Component {

  state = {
    _id: '',
    content: ''
  }

  render() {

    return (
      <div className={styles.field} >
          <input 
            value={this.state._id}
            onChange={(e) => this.setState({ _id: e.target.value })}
            type='text'
            placeholder='Id do Evento'
          />
          |
          <input 
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
            type='text'
            placeholder='Conteúdo'
          />
        <button
          className={styles.button}
          onClick={() => this._updateEvent()}
        >
          Update Event
        </button>
      </div>
    )

  }

  _updateEvent = () => {
    const { _id, content } = this.state
  updateEventMutation(_id, content, () => console.log(`Mutation completed`))
  }
}

export default UpdateEvent