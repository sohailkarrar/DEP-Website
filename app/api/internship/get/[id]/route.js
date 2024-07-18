import InternshipApplication from "@/models/InternshipApplication";
import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";



export async function GET(request, {params}){
    await connectDb();
    try {
        const {id} = params;
        if(!id){
            return NextResponse.json({success:false,message:"Please provide the id of application in url"},{status:400});
        }
        const application =await InternshipApplication.findOne({_id:id});
        if(application){
            return NextResponse.json({success:false,message:"Application Found Successfully!",application},{status:200});
        }
    } catch (error) {
        return NextResponse.json({success:false,message:error?.message ?? "Unable to get Application"},{status:500});
    }
}

