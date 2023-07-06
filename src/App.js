import {ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID = "d52b68c1-8156-49ea-9726-7a47f18bd95b"
            userName={localStorage.getItem('username')}
            userSecret ={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
            />
            
        
    );
}

export default App;