import {ChatEngine } from 'react-chat-engine';


import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID = "6ca537da-9c19-4c7b-a65c-f293de29a87d"
            userName={localStorage.getItem('username')}
            userSecret ={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
            />
            
    );
}

export default App;