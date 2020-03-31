import React from "react";
import loginImg from "../../login.svg";
import {Redirect} from 'react-router-dom';
import {CheckData} from '../../services/CheckData';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  
      this.state = {
      Email:'',
      password:'' ,
      redirect:false
    }
      this.login=this.login.bind(this);
      this.change=this.change.bind(this);
}
  login(){
        if(this.state.Email && this.state.password)
      {
        CheckData('login',this.state).then((result)=>{
          let resjson=result;
          if(resjson.userData){
            sessionStorage.setItem('userData',resjson);
            this.state({redirect:true});
          }else{
            alert('Login error');
          }
        });
      }
   
  }
  
  change(e){
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }
  render() {

      //Redirection
      if(this.state.redirect){
          return <Redirect to="../../services/bookslist"/>;
          // this.props.history.push('../../services/bookslist');    
      }
      if(sessionStorage.getItem('userData')){
        return <Redirect to="../../services/bookslist"/>;
      }
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
  
}}
