import React from 'react'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './context/AccountProvider'

const App = () => {

  const clientId = '996085305368-uvs3bch2gmio99po60l0vdmieee1mfcb.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App