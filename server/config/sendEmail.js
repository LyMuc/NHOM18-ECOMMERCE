import { sendEmail } from "./emailService.js";

const sendEmailFunction = async ({to, subject, text, html}) => {
    console.log('[EMAIL] to:', to);
    const result = await sendEmail(to, subject, text, html);
    if (!result?.success) {
        console.error('[EMAIL] failed:', result?.error);
    }
    return Boolean(result?.success);
}

export default sendEmailFunction;