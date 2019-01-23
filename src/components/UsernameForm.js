
import React, { Component } from 'react'


class UsernameForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            username:''
        }
         this.onSubmit = this.onSubmit.bind(this);
         this.onChange = this.onChange.bind(this);
         }
        
         onSubmit(e) {
            e.preventDefault();
            this.props.onSubmit(this.state.username);
    }

         onChange(e){
              this.setState({username: e.target.value});
         }

  

  render(){
    return (
      <div>
          <form onSubmit ={this.onSubmit}>
          <h2>Create a Username</h2>
              <input type="text"  
              placeholder="Your name" 
              onChange={this.onChange}/>

              <input type="submit" />

          </form>
      </div>
    )
  }
}




export default UsernameForm;

