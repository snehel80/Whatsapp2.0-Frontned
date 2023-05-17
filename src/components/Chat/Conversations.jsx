import React, { useEffect, useState, useContext } from 'react'
import Conversation from './Conversation';
import { Box, styled, Divider} from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';
import { getUser } from '../../services/api';

const Component = styled(Box)`
    height:81vh;
    overflow:overlay:
`

const StyledDivider = styled(Divider)`
    margin:0 0 0 70px;
    background-color:#e9edef;
    opacity:0.6;
`

const Conversations = ({ text }) => {
    const [users, setUsers] = useState([]);
    
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser();
            const filteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUser", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && 
                        <>
                            <Conversation user={user} />
                            {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
    )
}

export default Conversations