import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    secure:true,
    port:465,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});



export const sendMail = async({recipient,subject,htmlContent}) =>{
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: recipient,
        subject,
        html : htmlContent
    }
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}








