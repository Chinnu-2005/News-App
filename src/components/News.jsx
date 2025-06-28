import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import { getHeadlines } from "./Article";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  const updateNews = async () => {
    props.setProgress();
    setLoading(true);

    try {
      const { articles, totalResults } = await getHeadlines(page, props.category);
      setArticles(articles);
      setTotalResults(totalResults);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching initial data", err);
      setLoading(false);
    } finally {
      props.setProgress();
    }
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    props.setProgress();

    try {
      const { articles: newArticles, totalResults: newTotalResults } = await getHeadlines(nextPage, props.category);

      if (!newArticles || newArticles.length === 0) {
        setTotalResults(articles.length);
        return;
      }

      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      setPage(nextPage);
      setTotalResults(newTotalResults || totalResults);
    } catch (err) {
      console.error("Error fetching more data", err);
    } finally {
      props.setProgress();
    }
  };

  return (
    <div className="container my-3 mx-3" style={{ marginTop: "90px" }}>
      <h2 className="text-center">News Monkey - Latest News</h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        endMessage={
          <p className="text-center text-muted mt-4">
            <b>You’ve reached the end of the news feed.</b>
          </p>
        }
      >
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title}
                desc={element.description}
                image={element.urlToImage}
                url={element.url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
