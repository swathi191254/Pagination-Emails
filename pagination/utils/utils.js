const transporter = require("../configs/mail");

module.exports =( to , subject, text)=>{
    const message = {
        
        to,
        subject,
        text, 
        
      };
      transporter.sendMail(message);

};