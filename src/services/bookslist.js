import React, { Component } from 'react';
import axios from 'axios'
import {Table,Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';


class  Bookslist extends Component {
  constructor(props){
    super(props);
   this.state = {
      books:[],
      redirect:false  
    }
    this.logout=this.logout.bind(this);
  }
  
  componentWillMount(){
    if(sessionStorage.getItem("userData")){
      axios.get('http://localhost:8080/books').then((res)=>{
       
        this.setState({
          books:res.data
        }) 
      });
    }else{
      this.setState({redirect:true});
    }
    
  } 
  logout(){
    sessionStorage.setItem('userData','');
    sessionStorage.clear();
    this.setState({redirect:true});
  }
  
  render(){
    if(this.state.redirect){
      return <Redirect to ='../components/login'/>
    }
    let books = this.state.books.map((book)=>{
      return(
        <tr key={book._id}>
            <td>{book.TITLE}</td>
            <td>{book.AUTHOR}</td>
            <td>{book.EDITOR}</td>
            <td>{book.DESCRIPTION}</td>
            <td>{book.PRICE}</td>
            
        </tr>
      )
    });
    return (
    <div className="App comtainer">
      <h1>Books</h1>
      <Button color="danger" size="sm" onClick ={this.logout} >logout</Button>
      <Table>
        <thead>
          <tr>
            <th>Title </th>
            <th>Author</th>
            <th>Editor</th>
            <th>Descripton</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>      
          {books}
        </tbody>
      </Table>
    </div>
    
  );
  
}}

export default Bookslist;
