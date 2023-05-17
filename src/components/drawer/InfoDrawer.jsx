import React from 'react'
import { Drawer, Box, Typography, styled } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';


const drawerStyle = {
    left: 20,
    top: 18,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const Header = styled(Box)`
    background:#008069;
    height:107px;
    display:flex;
    color:#ffffff;
    & > svg, & > p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
        
    }
`

const Text = styled(Typography)`
    font-size:18px;
`

const Component = styled(Box)`
    background:#ededed;
    height:85%;
`

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer