import connectDb from "@/mongoDb/connectDb";
import internshipApplicationSchema from "@/validations/InternshipApplicationValidator";
import { NextResponse } from "next/server";
import InternshipApplication from "@/models/InternshipApplication";
import {z} from 'zod';
import mongoose from "mongoose";

export async function PUT(request,{params}) {
    try {
        await connectDb();
        const {id} = params;
        if(!id){
            return NextResponse.json({success:false,message:"Please provide the id of application in url"},{status:400});
        }
        const data = await request.json();
        const validatedData = internshipApplicationSchema.parse(data);
        const oldApplication = await InternshipApplication.find({_id:id});

        if(!oldApplication){
            return NextResponse.json({ success: false, message: "Application not found!" }, { status: 404 });
        }
        console.log(validatedData);
        const userId = new mongoose.Types.ObjectId(id);
        const newApplication = await InternshipApplication.findByIdAndUpdate(userId, validatedData, {new:true});
        console.log(newApplication);
        if (newApplication) {
            return NextResponse.json({ success: true, message: 'Application updated successfully!', newApplication }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Unable to update application!" }, { status: 500 });
        }
    } catch (error) {
        console.error('Error saving application:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, message: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
