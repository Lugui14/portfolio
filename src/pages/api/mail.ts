import { mailOptions, transporter } from 'config/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const bodyText = (name: string, email: string, message: string) => `
<h1> New message from ${name} </h1>
<h3> Email: ${email} </h3>
<p> ${message} </p>
`;

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, message } = JSON.parse(req.body);

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New message from PORTFOLIO`,
            text: `New message from ${name} \n Email: ${email} \n ${message}`,
            html: bodyText(name, email, message),
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default mail;
