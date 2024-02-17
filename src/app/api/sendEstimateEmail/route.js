import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  if (req.method === "POST") {
    const formData = await req.json();
    console.log(formData);
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Form Submission",
      html: `
      <p><strong>Full Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone Number:</strong> ${formData.mobileNumber}</p>
      <p><strong>Contact on Whatsapp</strong> ${formData.whatsapp}</p>
      <p><strong>Pincode:</strong> ${formData.pincode}</p>
      <p><strong>Selected Floorplan:</strong> ${formData.selectedFloorplan}</p>
      <p><strong>Purpose:</strong> ${formData.selectedPurpose}</p>
      <p><strong>Kitchen:</strong> ${formData.kitchen}</p>
      <p><strong>Entertainment Unit:</strong> ${formData.entertainmentUnit}</p>
      <p><strong>Study Unit:</strong> ${formData.studyUnit}</p>
      <p><strong>Wardrobe:</strong> ${formData.wardrobe}</p>
      <p><strong>Crockery Unit:</strong> ${formData.crockeryUnit}</p>
     
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 500 }
    );
  }
}
