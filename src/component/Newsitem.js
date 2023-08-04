import React, { Component } from "react";


export default class Newsitem extends Component {

render() {
    let {title,description,imgurl,newsurl,author,publishedAt,source}=this.props
    return (
      <div className="my-3">
   
        <div className="card ms-3 " style={{ width : "16rem",border:".005px solid rgba(0, 255,0, 0.99) "}} >
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
          <img src={imgurl?imgurl:"https://img.etimg.com/thumb/msid-89696113,width-1070,height-580,imgsize-102506,overlay-economictimes/photo.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            
            <a href={newsurl} target="_blank" className="btn btn-sm btn-success">
              Read More
            </a>
          <p className="card-twxt"><small className="text-muted">by {author?author:"unknown author"} on time {publishedAt} {new Date(publishedAt).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}
