import React, { useEffect,useState } from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import Messages from './Messages'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api.js'

const ChatBox = () => {

    const { person ,account } = useContext(AccountContext);

    const [conversation,setConversation] = useState({});

    useEffect(()=>{
        const getConversationDetails = async() =>{
            const data = await getConversation({senderId:account.sub, receiverId:person.sub});
            setConversation(data);
        }
        getConversationDetails();
    },[person.sub])

    return (
        <Box style={{
            height: '75%'
        }}>
            <ChatBoxHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox