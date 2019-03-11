import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
class App extends Component {

 constructor (){
   super()

   this.state ={
     messages:[]
   }
 }

  componentDidMount(){
  
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:3048226e-2812-45f3-89b5-4ea7aaa1b954',
      userId: 'treek',
      tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3048226e-2812-45f3-89b5-4ea7aaa1b954/token' })
    })

    chatManager.connect()
     .then(currentUser =>{
       currentUser.subscribeToRoom({
         roomId:'19376671',
         messageLimit:20,
         hooks:{
            onNewMessage: message =>{
              console.log('message.text',message.text);
              this.setState({
              message:[...this.state.messages, message]
              })

            }
         }
       })
     })
  }
  render() {
   console.log("this is the state.messages",this.state.messages);
   
    return (
      <div>
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
    );
  }
}

export default App;
