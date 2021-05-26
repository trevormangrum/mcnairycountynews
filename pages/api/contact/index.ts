import { sendMessage } from "server/actions/Form";
import { EmailMessage} from "utils/types";
import {NextApiRequest, NextApiResponse} from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const message = JSON.parse(req.body) as EmailMessage;
        await sendMessage(message); 
        res.status(200).json({
            success: true,
            message: "Email successfully sent.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            payload: error,
        });
    }
}
