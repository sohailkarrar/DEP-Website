import connectDb from "@/mongoDb/connectDb";
import Application from "@/models/Application";
import { Parser } from "json2csv";
import { NextResponse } from "next/server";

const fields = [
    'applyFor', 'fullName', 'email', 'whatsappNumber', 'gender',
    'instituteName', 'fieldOfStudy', 'yearOfStudy', 'region',
    'facebookLink', 'instagramLink', 'linkedinLink',
    'previousExperiences', 'bestSkills', 'createdAt', 'updatedAt'
];

const opts = { fields };

export async function GET (){
    await connectDb();
    try {
        const applications = await Application.find({});
        const parser = new Parser(opts);
        const csv = parser.parse(applications);
        return new Response(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=applications.csv',
            },
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Error getting applications. Please try again!',
            error: error.message
        }, { status: 500 });
    }
}