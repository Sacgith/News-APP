/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button } from "react-bootstrap";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=b434a81960e24c22aafcc64fceb880f0&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b434a81960e24c22aafcc64fceb880f0&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
  handlePrevClick = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b434a81960e24c22aafcc64fceb880f0&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1>DailyNews Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            variant="dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </Button>{" "}
          <Button variant="dark" onClick={this.handleNextClick}>
            Next &rarr;
          </Button>{" "}
        </div>
      </div>
    );
  }
}
