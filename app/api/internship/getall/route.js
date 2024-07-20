import InternshipApplication from "@/models/InternshipApplication";
import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";


export async function GET(request){
    await connectDb();
    try {
        const applications =await InternshipApplication.find();
        return NextResponse.json({success:true,message:"Found all applications successfully!",applications},{status:200});
    } catch (error) {
        return NextResponse.json({success:false,message:"Unable to retrieve all internship applications"},{status:500});
    }
}

