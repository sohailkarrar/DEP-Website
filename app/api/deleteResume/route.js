import Resume from "@/models/Resume";
import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";
import cloudinary from 'cloudinary';
import mongoose from "mongoose";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function POST(request){
    try {
        await connectDb();
        const data = await request.json();
        const url = data.url;
        if(!url){
            return NextResponse.json({success:false,message:"Must provide the url"},{status:400});
        }
        const resume =await Resume.findOne({ $or:[{url}, {secure_url:url}]});
        if(!resume){
            return NextResponse.json({success:false,message:"Resume not found!"},{status:404});
        }
        await cloudinary.uploader.destroy(resume.public_id);
        const resId = new mongoose.Types.ObjectId(resume._id);
        const deleted = await Resume.findByIdAndDelete(resId);
        if(!deleted){
            return NextResponse.json({success:false,message:"Sorry unable to delete resume from database!"},{status:500});
        }
        return NextResponse.json({success:true,message:"Resume deleted successfully!"},{status:200});
    } catch (error) {
        console.log('Error while deleting resume',error);
        return NextResponse.json({success:false,message:error?.message ??"Internal Server Error"},{status:500});
    }
}









