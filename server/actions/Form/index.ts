import { EmailMessage } from "utils/types";
import { createTransport } from "nodemailer";
export const sendMessage = async (message: EmailMessage): Promise<void> => {
    const body = message.body + `\n From: ${message.email}`;
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "mcncontactform@gmail.com", 
            pass: process.env.EMAIL_PASS,
        }
    });
    const mailOptions = {
        from: "mcncontactform@gmail.com",
        to: "bluetman@gmail.com", //Make this an email for MCN.
        subject: message.subject,
        text: body,
    }

    transporter.sendMail(mailOptions);
}
