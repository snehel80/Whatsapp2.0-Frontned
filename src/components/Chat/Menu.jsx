import React, { useState } from 'react'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import SearchBar from './SearchBar'
import Conversations from './Conversations'

const Menu = () => {

  const [text,setText] = useState('');

  return (
    <Box>
      <ChatHeader />
      <SearchBar setText={setText}/>
      <Conversations text={text}/>
    </Box>
  )
}

export default Menu