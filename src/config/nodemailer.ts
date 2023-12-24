import { createTransport } from 'nodemailer';

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = createTransport({
    service: 'gmail',
    auth: {
        user,
        pass,
    },
});

export const mailOptions = {
    from: user,
    to: user,
};
