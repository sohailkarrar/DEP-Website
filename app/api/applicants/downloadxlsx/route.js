import connectDb from "@/mongoDb/connectDb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";
import ExcelJS from 'exceljs';


export async function GET() {
    await connectDb();
    try {
        const applications = await Application.find({});

        // Create a new workbook and a worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Applications');

        // Define columns
        worksheet.columns = [
            { header: 'Apply For', key: 'applyFor', width: 30 },
            { header: 'Full Name', key: 'fullName', width: 30 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'WhatsApp Number', key: 'whatsappNumber', width: 30 },
            { header: 'Gender', key: 'gender', width: 10 },
            { header: 'Institute Name', key: 'instituteName', width: 30 },
            { header: 'Field Of Study', key: 'fieldOfStudy', width: 30 },
            { header: 'Year Of Study', key: 'yearOfStudy', width: 15 },
            { header: 'Region', key: 'region', width: 20 },
            { header: 'Facebook Link', key: 'facebookLink', width: 30 },
            { header: 'Instagram Link', key: 'instagramLink', width: 30 },
            { header: 'LinkedIn Link', key: 'linkedinLink', width: 30 },
            { header: 'Previous Experiences', key: 'previousExperiences', width: 30 },
            { header: 'Best Skills', key: 'bestSkills', width: 30 },
            { header: 'Created At', key: 'createdAt', width: 20 },
            { header: 'Updated At', key: 'updatedAt', width: 20 },
        ];

        applications.forEach(app => {
            worksheet.addRow({
                ...app.toObject(),
                bestSkills: app.bestSkills.join(', '),
                createdAt: app.createdAt.toISOString(),
                updatedAt: app.updatedAt.toISOString(),
            });
        });

        // Write to buffer
        const buffer = await workbook.xlsx.writeBuffer();

        return new Response(buffer, {
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename=applications.xlsx',
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





