import React, { Component } from 'react'
import styles from './DeleteEventComponent.module.scss'
import DeleteEventMutation from './mutations/deleteEvent'

class DeleteEvent extends Component {

  state = {
    _id: ''
  }

  render() {

    return (
      <div className={styles.field} >
          <input 
            value={this.state._id}
            onChange={(e) => this.setState({ _id: e.target.value })}
            type='text'
            placeholder='Id do Evento a ser Deletado'
          />
        <button
          className={styles.button}
          onClick={() => this._deleteEvent()}
        >
          Delete
        </button>
      </div>
    )
  }

  _deleteEvent = () => {
    const { _id } = this.state
  DeleteEventMutation(_id, () => console.log(`Mutation completed`))
  }
}

export default DeleteEvent