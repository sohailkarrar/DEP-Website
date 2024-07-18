import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import cloudinary from 'cloudinary';
import Resume from "@/models/Resume";
import { unlinkSync } from 'fs'
import connectDb from "@/mongoDb/connectDb";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req, res) => {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const filePath = path.join(process.cwd(), "public/files/" + filename);
    // console.log(filename);
    try {
        await connectDb();
        await writeFile(
            filePath,
            buffer
        );
        const cloudinaryResponse = await cloudinary.uploader.upload(filePath, {folder: 'InternshipResumes'});
        if(!cloudinaryResponse){
            return NextResponse.json({ success:false, message: "Unable to upload to cloudinary!" },{status:500});
        }
        const resume = await Resume.create(cloudinaryResponse);

        if(!resume){
            return NextResponse.json({ success:false, message: "Unable to save resume in database!" },{status:500});
        }
        unlinkSync(filePath);

        return NextResponse.json({ success:true, message:"Resume has been uploaded successfully!" ,resume},{status:200});
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ success:false, message:error?.message ?? "Internal Server Error" },{status:500});
    }
};

