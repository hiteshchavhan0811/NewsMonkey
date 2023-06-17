import React,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component{
  render (){

    let {title,description,imageUrl,newsUrl,newsAuthor,newsDate,newsSource} = this.props;
    return(
    <div className="my-3 newsCard">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{newsSource}</span>
        <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.O21Q6ByDjlqd7OoD0LWpCwHaE8?pid=ImgDet&rs=1"} className="card-img-top" alt="..." style={{height:'200px'}}/>
        <div className="card-body">
          <h5 className="card-title" style={{height:'50px'}}>{title?title.substring(0,45):""}</h5>
          <p className="card-text" style={{height:'70px'}}>{description?description.substring(0,88):""}</p>
          <h6 style={{height:'40px'}}>Author : {newsAuthor}</h6>
          <h6 style={{height:'40px'}}>Date : {newsDate}</h6>
          <Link to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
        </div>
      </div>
    </div>
  );
  }
}