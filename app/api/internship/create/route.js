import connectDb from "@/mongoDb/connectDb";
import internshipApplicationSchema from "@/validations/InternshipApplicationValidator";
import { NextResponse } from "next/server";
import InternshipApplication from "@/models/InternshipApplication";
import z from 'zod';

export async function POST(request) {
    try {
        await connectDb();
        const data = await request.json();
        const validatedData = internshipApplicationSchema.parse(data);
        // const oldExists = await InternshipApplication.find({email:validatedData.email, batchNumber:String.toString(validatedData.batchNumber), preferredInternshipDomain:validatedData.preferredInternshipDomain});

        // if(oldExists){
        //     return NextResponse.json({ success: false, message: "Application already found in this domain!" }, { status: 409 });
        // }

        const newApplication = new InternshipApplication(validatedData);
        await newApplication.save();

        return NextResponse.json({ success: true, message: 'Application created successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error creating application:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, message: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
