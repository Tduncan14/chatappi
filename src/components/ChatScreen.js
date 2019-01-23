import React,{Component} from 'react';
import Chatkit from '@pusher/chatkit-client'


class ChatScreen  extends Component {
    constructor(props){
        super(props)
        this.state ={
            currentUser:{}
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
             .then(current =>{
                 this.setState({currentUser})
             })
             .catch(error => console.error('error',error));
         
    }

    render(){
        return(
            <div>
             <h1>Chat</h1>
             </div>
        )
        
    }
}


export default ChatScreen;