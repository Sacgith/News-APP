/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export default class NewsItem extends Component {
  render() {
      const {title, description, imageUrl, newsUrl}=this.props;
    return (
      <div className='my-3'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {description}
            </Card.Text>
            <Button variant="/newsdetail">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
