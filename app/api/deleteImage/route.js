import Image from "@/models/Image";
import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";
import ImageKit from "imagekit";
import mongoose from "mongoose";

const imageKit = new ImageKit({
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY,
    publicKey:process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint:process.env.IMAGE_KIT_URL_ENDPOINT,
});


export async function POST(req){
    try {
        const data = await req.json();
        const {url} = data;
        if(!url){
            return NextResponse.json({success:false, message:"Must provide the image url to delete"},{status:400});
        }
        connectDb();
        const image = await Image.findOne({$or:[{url},{thumbnailUrl:url}]});
        if(!image){
            return NextResponse.json({success:false, message:"Image not found!"},{status:404});
        }
        await imageKit.deleteFile(image.fileId);
        const imageId = new mongoose.Types.ObjectId(image._id);
        const deleted = await Image.findByIdAndDelete(imageId);
        if(!deleted){
            return NextResponse.json({success:false, message:"Error deleting image from database!"},{status:500});
        }
        return NextResponse.json({success:true, message:"Successfully deleted image!"},{status:200});
    } catch (error) {
        console.log('Error deleting image!',error);
        return NextResponse.json({success:false, message: error?.message ?? "Error deleting image!"},{status:500});
    }
}





