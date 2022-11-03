import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import MainPage from './containers/MainPage';
import styles from './App.module.scss';
import environment from './environment';

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
      </div>
    );
  }
}