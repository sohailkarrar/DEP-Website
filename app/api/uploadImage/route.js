import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import ImageKit from "imagekit";
import Image from "@/models/Image";
import { unlinkSync } from 'fs'

const imagekit = new ImageKit({
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY,
    publicKey:process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint:process.env.IMAGE_KIT_URL_ENDPOINT,
})


export async function POST(req){
    const formData = await req.formData();

    const file = formData.get("image");
    if (!file) {
        return NextResponse.json({ error: "No image received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const filePath = path.join(process.cwd(), "public/files/" + filename);
    console.log(filename);
    try {
        connectDb();
        await writeFile(
            filePath,
            buffer
        );
        const response = await imagekit.upload({
            file:buffer,
            fileName:filename
        });
        if(!response){
            return NextResponse.json({success:false,message:"Error Uploading Image to image kit"},{status:500});
        }
        const image = await Image.create(response);
        if(!image){
            return NextResponse.json({success:false,message:"Error Saving Image to database"},{status:500});
        }
        unlinkSync(filePath);
        return NextResponse.json({ success:true, message:"Image has been uploaded successfully!",image},{status:200});
    } catch (error) {
        console.log('Error uploading image',error);
        return NextResponse.json({success:false,message:error?.message ?? "Internal Server Error"},{status:500});
    }
}





