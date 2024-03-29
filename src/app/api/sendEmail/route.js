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
     
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
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
