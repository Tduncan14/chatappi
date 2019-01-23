import React,{Component} from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './components/MessageList';


class ChatScreen  extends Component {
    constructor(props){
        super(props)
        this.state ={
            currentUser:{},
            currentRoom:{},
            messages:[]
        }

    }

    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator:'v1:us1:4cb732f3-bdac-4155-aa75-2e8c097ad8f5',
            userId:this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate',
            }),
        })

        chatManager
         .connect()
             .then(currentUser =>{
                 this.setState({currentUser})
                 return currentUser.subscribeToRoom({
                     roomId:"19378532",
                     messageLimit:100,
                     hooks:{
                         onMessage: message =>{
                             this.setState({
                                 messages:[...this.state.messages,message]
                             })
                         }
                     }
                 })
             })
             .then(currentRoom =>{
                 this.setState({currentRoom})
             })
             .catch(error => console.error('error',error));
         
    }

    render(){
       
         const styles ={
             container:{
                 height:'100vh',
                 display:'flex',
                 flexDirection:'column'
             },

             chatContainer:{
                 display:'flex',
                 flex:1
             },

             whosOnlineListContainer: {
                width: '300px',
                flex:'none',
                padding:20,
                backgroundColor:'#006994',
                color:'lightGreen'
             },
               chatListContainer:{
                   padding:20,
                   width:'85%',
                   display:'flex',
                   flexDirection:'column'
               },

         }

         return(
             <div style ={styles.container}>
              <div style={styles.chatContainer}>
                <aside style ={styles.whosOnlineListContainer}>
                   <h2>If you are online say hi</h2>
                </aside>
                <section style ={styles.chatListContainer}>
              <MessageList 
                 messages ={this.state.messages}
                 style ={styles.chatList} />
                </section>
              </div>
             </div>
         )
        
    }
}


export default ChatScreen;