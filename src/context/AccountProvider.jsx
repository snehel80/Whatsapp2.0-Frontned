import { createContext, useState, useRef, useEffect } from 'react';
import {io} from 'socket.io-client';
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [activeUsers,setActiveUsers] = useState([]);
    const socket = useRef();

    useEffect(()=>{
        socket.current = io('https://whatsapp20-socket-production.up.railway.app/');
    },[])
    
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;