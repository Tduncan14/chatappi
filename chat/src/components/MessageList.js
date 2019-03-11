import React, { Component } from 'react'

const Dummy_Data =[
  {
      senderId:'treek',
      text:'Hey,how is it going'
  },
   {
       senderId:'treek',
       text:'Great,how about you'
   },
    {  senderId:'treek',
       text:'Good,thanks for asking' }      



]

export default class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {
        Dummy_Data.map((message ,index) =>{
            return(
                <div key={index}className="message">
                <div className="message-user">{message.senderId} :</div> 
                   <div className="message"> {message.text} </div>
                </div>
            )
        })
        }
      </div>
    )
  }
}
