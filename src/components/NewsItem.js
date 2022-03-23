/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Card, Button} from "react-bootstrap";

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              !imageUrl
                ? "https://cdn.siasat.com/wp-content/uploads/2020/01/dementia.jpg"
                : imageUrl
            }
            style={{ height: "200px" }}
          />

          <Card.Body>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex:'1'}}>
              {source}
            </span>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Button variant="primary" href={newsUrl} target="_blank">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
