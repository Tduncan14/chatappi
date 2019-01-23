import React from 'react';

class UsernameForm extends React.Component{
    constructor(props){
        this.state ={
            username:''
        }

    }

    render(){
         return <div>
              <form>
                  <input type="text" placeholder="What is your name?" onChange={this.onChange}/>
                  <input type="submit" />
              </form>
         </div>
    }
}

export default UsernameForm