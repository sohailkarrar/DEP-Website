import { NextResponse } from "next/server";
import applicationValidator from "@/validations/applicationValidator";
import Application from "@/models/Application";
import connectDb from "@/mongoDb/connectDb";
import { sendMail } from "@/mailer/mailer";
import confirmApplicationSubmission from "@/emails/confirmApplicationSubmission";


// Route to create a new Application
// post 

export async function POST (req){
    await connectDb();
    try {
        const body =await req.json();
        const validatedData = applicationValidator.parse(body);
        const application = new Application(validatedData);
        await application.save();
        await sendMail({
            recipient:application.email,
            subject:'Application Recieved Successfully',
            htmlContent:confirmApplicationSubmission({name:application.fullName})
        });
        return NextResponse.json({
            success:true,
            message:'Your Application has been Submitted Successfully!',
            body:validatedData
        },{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:'Error submiting application. Please try again!',
            error:error.message
        },{status:500});
    }
}



// GET: getAll 
export async function GET (){
    await connectDb();
    try {
        const applications = await Application.find({});
        return NextResponse.json({
            success:true,
            message:'Applications Submitted so far are Retrieved Successfully!',
            applications
        },{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:'Error getting applications. Please try again!',
            error:error.message
        },{status:500});
    }
}













