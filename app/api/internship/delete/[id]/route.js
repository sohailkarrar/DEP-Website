import connectDb from "@/mongoDb/connectDb";
import { NextResponse } from "next/server";
import InternshipApplication from "@/models/InternshipApplication";
import mongoose from "mongoose";

export async function DELETE(request, { params }) {
    try {
        await connectDb();
        const { id } = params;
        if (!id) {
            return NextResponse.json({ success: false, message: "Please provide the id of the application in the URL" }, { status: 400 });
        }
        const userId = new mongoose.Types.ObjectId(id);
        const deletedApplication = await InternshipApplication.findByIdAndDelete(userId);

        if (!deletedApplication) {
            return NextResponse.json({ success: false, message: "Application not found!" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Application deleted successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting application:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
