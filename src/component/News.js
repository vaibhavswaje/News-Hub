import React, { Component ,useEffect, useState}  from "react";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalresults:0,
      pageSize: 20,

    };
  }
   updateNews = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
      let data = await fetch(url);
    var parsedata = await data.json();
   
    this.setState({ articles: parsedata.articles,
      loading:false,
      totalresults:parsedata.totalresults
     });
    
}
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4e4baed0080745e1abcc12a4a86ade00&category=${this.props.category}&page=${this.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
    var parsedata = await data.json();
   
    this.setState({ articles: parsedata.articles,
      loading:false,
      totalresults:parsedata.totalresults
     });

  } 
  
 fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e4baed0080745e1abcc12a4a86ade00&category=${this.props.category}&page=${this.page+1}&pageSize=${this.props.pageSize}`; 
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles:this.articles.concat(parsedData.articles),
      
      totalresults:parsedData.totalresults
     });
     

  };

  render() {
    return (
      <>
      <div className="container my-4" >
      <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}} >News app</h1>
      {this.state.loading && < Loader/>}
      
     
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles.length!=this.state.totalresults)}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">
        <div className="row">
      
          { this.state.articles.map((element) => {
            return (
              <div className=" col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 100) + "..."
                      : " "
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}

                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        
    
         </div>
         </>
    );
  }
}

export default News;
