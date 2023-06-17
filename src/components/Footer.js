import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
	render(){
		return(
			<div className="container-fluid my-3" style={{backgroundColor:'#212529',color:'white'}}>

			    <div className="row">
			        <div className="container col-md-2">
			        <h4 className="my-3">Top News Categories</h4>
			        <ul>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Top-Headlines</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Entertainment</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Technology</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Science</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Health</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Business</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Sports</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/technology">Entertainment</Link>
			    </li>
			</ul>
			        </div>

			        <div className="container col-md-2">
			        <h4 className="my-3">Country Headlines</h4>
			        <ul>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/in">India</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/us">United States</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/gb">United Kingdom</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/au">Australia</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/ch">China</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/ru">Russia</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/nz">New Zeland</Link>
			    </li>
			    <li>
			        <Link className="nav-link active my-2" aria-current="page" to="/za">South Africa</Link>
			    </li>
			</ul>
			        </div>

			        <div className="container col-md-3">
			        <h4 className="my-3">About Us</h4>
			        <p>Email : newsmonkey@gmail.com</p>
			        <p>Address : 08,NewsMonkey ,React Park, News Api Road,Node-3000</p>
			        <p>Contact : 9888888888</p>
			        <img src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_FACEBOOK-1024x1024.png" className="facebook "/>
			        <img src="https://www.freepngimg.com/download/logo/69768-logo-computer-layout-instagram-icons-png-file-hd.png" className="instagram mx-2"/>
			        <img src="https://drraymondasemente.com/wp-content/uploads/2017/08/google_logo1600.png" className="google mx-2"/>

			        </div>
			    </div>
			</div>
		);
	}
}