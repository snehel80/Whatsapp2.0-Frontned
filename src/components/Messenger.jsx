import React, { useContext } from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import LoginDialog from './account/LoginDialog'
import ChatDialog from './Chat/ChatDialog'
import { AccountContext } from '../context/AccountProvider'

const Component = styled(Box)`
    height:100vh;
    background-color:#dcdcdc
`

const LoginHeader = styled(AppBar)`
    height:220px;
    background-color:#00bfa5;
    box-shadow:none;

`

const ChatHeader = styled(AppBar)`
  height:125px;
  background-color:#00a884;
`

const Messenger = () => {

  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? 
        <>
          <ChatHeader>
            <Toolbar>

            </Toolbar>
          </ChatHeader>
          <ChatDialog />
        </>
      :
        <>
          <LoginHeader>
            <Toolbar>

            </Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      }
    </Component>
  )
}

export default Messenger