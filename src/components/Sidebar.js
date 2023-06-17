import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
	render(){
		return(
			<div className="container sidebar" style={{backgroundColor:'#212529',color:'white'}}>
      <br/>
        <h5 className="text-center">Country - Top Headlines</h5>
			   <div className="row">
        <div className="col-8 text-center my-3">
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset={0} data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
            <h4 id="simple-list-item-1">Item 1</h4>
            <p>...</p>
            <h4 id="simple-list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="simple-list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="simple-list-item-4">Item 4</h4>
            <p>...</p>
            <h4 id="simple-list-item-5">Item 5</h4>
            <p>...</p>
          </div>
        </div>
      </div>
			</div>
		)
	}
}