import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './chat.css';

let socket;

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        socket = io();

        socket.emit("chat", { user: "Dumbledore", msg: "Welcome to Hogwart's chatroom. Always be kind!"});

        socket.on('chat', (chat) => {
            setMessages(messages => [...messages, chat])
        })

        return (() => {
            socket.disconnect()
        })
    }, []);

    function scrollToBottom() {
        const element = document.getElementById("chatMessages");
        element.scrollTop = element.scrollHeight;
    }

    const sendChat = (e) => {
        // console.log('in send chat')
        e.preventDefault();
        socket.emit("chat", { user: user.username, msg: chatInput });
        setChatInput('');
        scrollToBottom();
    }

    return (
        <div className='chatPage'>
            <h1 className='chatTitle'>
                Chatroom
            </h1>
            <div className='chatContainer'>
                <div id='chatMessages'>
                    {messages.map((message, ind) => (
                        <div className='eachChatMessage' key={ind}>{`${message.user}: ${message.msg}`}</div>
                    ))}
                </div>
                <form onSubmit={sendChat} className='chatForm'>
                    <input
                        value={chatInput}
                        className='chatBox'
                        required
                        placeholder='Send a chat message'
                        onChange={e => setChatInput(e.target.value)}
                    />
                    <button hidden type="submit">Send</button>
                </form>
            </div>
        </div>
    )
};

export default Chat;
