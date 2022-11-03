import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import MainPage from './containers/MainPage';
import styles from './App.module.scss';
import CreateEvent from './containers/CreateEvent/CreateEventComponent';
import DeleteEvent from './containers/DeleteEvent/DeleteEventComponent';
import UpdateEvent from './containers/UpdateEvent/UpateEventComponent'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>     
            <h1 className={styles.Events}>
              Events
            </h1>
            <div className={styles.content}>
              <MainPage/> 
            </div>
          
          <div className={styles.row}>
            <div className={styles.column}>
            
              <CreateEvent/>
            </div>
            
            <div className={styles.column}>
              <DeleteEvent/>
            </div>
            
            <div className={styles.column}>
              <UpdateEvent/>
            </div>

          </div>

      </div>
    );
  }
}