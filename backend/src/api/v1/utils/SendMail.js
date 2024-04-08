const {Resend }= require('resend')

const resend = new Resend(process.env.SMTP_KEY);

const SendMail = async ( to, subject, message,name ) => {
    try {
        resend.emails.send({
            from: process.env.SMTP_USER,
            to,
            subject,
            html: `
                <body>
                    <h2>${name} Welcome In Aeonaxy</h2>
                    <p>${message}</p>
                </body>
            `
        });

    } catch (error) { throw new Error(`Error occur to send mail ${error}`) }

}


module.exports = SendMail;