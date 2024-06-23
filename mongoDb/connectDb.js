import mongoose from "mongoose"

const connection = {};



const connectDb = async()=>{

    if(connection.isConnected){
        console.log('Db is already connected!');
        return;
    }else{
        try {
            const db = await mongoose.connect(process.env.MONGO_URI || '');
            connection.isConnected = db.connections[0].readyState;
            console.log('DB Connected !');
        } catch (error) {
            console.log('Error connecting to database! ',error);
            process.exit(1);
        }
    }
}

export default connectDb;




