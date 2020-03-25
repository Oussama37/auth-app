import React from "react";
import loginImg from "../../login.svg";
import {CheckData} from '../../services/CheckData';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  
 this.state = {
   
      Email:'',
      password:'' 
    }
    this.login=this.login.bind(this);
    this.change=this.change.bind(this);
}
  login(){
    
    CheckData('login',this.state).then((result)=>{
      let resjson=result;
      console.log(resjson);
    });
  }
  change(e){
    
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
        <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" name="Email" placeholder="Email" onChange={this.change}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" onChange={this.change} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
