import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    valid:false,
    user:[] ,
    NewUserData:{
      FirstName :'',
      LastName:'',
      Email:'',
      Password:'' 
    },
  }
  adduser(){
    axios.post('http://localhost:8080/auth/singup',this.state.NewUserData).then(res =>{
      let{user}=this.state;
      user.push(res.data);

      this.setState({user ,NewUserData:{
        FirstName :'',
        LastName:'',
        Email:'',
        Password:''  
      },
    });
      if(res.status==201){
          alert('User created')
      }
      if(res.status==409){
          alert('Mail Exists')
      }
      if(res.status==500){
          alert('verify You infos')
      }
      })
  }
  
  render() {
    return (
      <form className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="Firstname">Firstname</label>
              <input type="text" name="Firstname" placeholder="Firstname"
              value={this.state.NewUserData.FirstName} onChange={(e)=>{
                let {NewUserData}=this.state;
                NewUserData.FirstName=e.target.value;
                this.setState({NewUserData})
              }} required  />
            </div>
            <div className="form-group">
              <label htmlFor="Lastname">Lastname</label>
              <input type="text" name="Lastname" placeholder="Lastname"
              value={this.state.NewUserData.LastName} onChange={(e)=>{
                let {NewUserData}=this.state;
                NewUserData.LastName=e.target.value;
                this.setState({NewUserData})
              }}required  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input  type="email" name="email" placeholder="email"
              value={this.state.NewUserData.Email} onChange={(e)=>{
                let {NewUserData}=this.state;
                NewUserData.Email=e.target.value;
                this.setState({NewUserData})
              }}required />
            </div>
           <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"
               value={this.state.NewUserData.Password} onChange={(e)=>{
                let {NewUserData}=this.state;
                NewUserData.Password=e.target.value;
                this.setState({NewUserData})
              }} required/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.adduser.bind(this)}>
            Register
          </button>
        </div>
      </form>
      
      
    );
  }
}
