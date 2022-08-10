import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';

interface IData {
    email: string;
    name: string;
    message: string;
}

interface IRes {
    response: string;
}

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse<IRes>) => {
    const { email, name, message }: IData = JSON.parse(req.body);

    const formatedMessage: string = `
      Name: ${name}\r\n
      Email: ${email}\r\n
      Message: ${message}
    `;

    const data = {
        to: 'zanelallopes9977@gmail.com',
        from: 'zanelallopes99977@gmail.com',
        subject: 'New Message from Portfolio!',
        text: formatedMessage,
        html: formatedMessage.replace(/\r\n/g, '<br>'),
    };

    mail.send(data)
        .then(() => {
            res.status(200).json({ response: 'Email sent!' });
        })
        .catch((error) => {
            res.status(error.code).json({ response: error });
        });
};
