/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category:"general"
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b434a81960e24c22aafcc64fceb880f0&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    // console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.state.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=b434a81960e24c22aafcc64fceb880f0&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    // console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=b434a81960e24c22aafcc64fceb880f0&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">DailyNews Top Headlines</h1>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="container d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            variant="dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </Button>{" "}
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            variant="dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </Button>{" "}
        </div>
      </div>
    );
  }
}
