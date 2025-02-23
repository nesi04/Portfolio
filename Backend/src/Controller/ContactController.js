import Contact from '../models/ContactSchema.js'
export const sendMessage = async(req,res)=>{
    try {
        const {name,email,message}= req.body;
        const newMessage = new Contact({name,email,message});
        await newMessage.save();
        res.status(201).json(newMessage);
        
    } catch (error) {
        console.error('Error Sending message',error);
        res.status(500).json({message:"Error sending the message"});
    }
};

export const getMessage = async(req,res)=>{
    try {
        const messages = await Contact.find();
        res.status(201).json(messages);
    } catch (error) {
        console.error('Error getting message',error);
        res.status(500).json({message:"Error getting the messages"});
    }
};