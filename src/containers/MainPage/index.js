import React from 'react';
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../../environment'

export default class MainPage extends React.Component {
  render() {
    return (
        <QueryRenderer
        environment={Environment}
        query={graphql`
          query MainPageQuery {
            events {
              _id
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return props.events.map((event, content) => {
            return <p  key={event._id} >id:{event._id} content: {event.content} </p>;
         });
        }}
      />
    );
  }
}