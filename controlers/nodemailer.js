const nodemailer = require('nodemailer')
const nodemailers = async (gmail) => {
    const htmlBuild = `
    <h2>${gmail}</h2>
    `
    const transporter = nodemailer.createTransport({
        pool: true,
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            type:'login',
            user:process.env.LOGINGM,
            pass:process.env.PASSGMAIL,
        },tls: {
          rejectUnauthorized: false,
        }
    })
    const info  = await transporter.sendMail({
        from :`New Data>`,
        to:'admiredcompany@gmail.com',
        html:htmlBuild
    })
    console.log('sent',info.messageId)
    console.log(info.accepted)
    console.log(info.rejected)
}
module.exports = nodemailers