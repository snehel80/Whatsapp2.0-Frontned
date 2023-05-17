import axios from 'axios';

const url='http://localhost:8000';

export const addUser = async(data) =>{
    try{
        await axios.post(`${url}/add`,data);
    }catch(err){
        console.log('Error while adding user',err.msg);
    }
}

export const getUser = async()=>{
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    }catch(err){
        console.log('Error while getting users data',err.message);
    }
}

export const setConversation = async(data) =>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}

export const getConversation = async(data) =>{
    try{
        let response = await axios.post(`${url}/conversation/get`,data);
        return response.data;
    }catch(error){
        console.log('Error while calling getConversation api',error.message);
    }
}

export const newMessage = async(data) =>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(error){
        console.log('Error while calling newMessage api',error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}