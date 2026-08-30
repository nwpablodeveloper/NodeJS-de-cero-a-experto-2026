import  { envs }  from "../../config/plugins/envs.plugin";
import nodemailer from 'nodemailer';

export interface SendMailOptcions {
  to: string,           // Destino
  subject: string,      // Titulo del correo
  htmlBody: string,     // Contenido del correo

  //todo: attachments:  // Archivos adjuntos
}

export class EmailService {

  
  private  transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE, 
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAIL_SECRET_KEY,
    }
  });
  

  async sendEmail(options: SendMailOptcions):Promise<boolean>{
    
    const { to, subject, htmlBody } = options;


    try {

      const sendInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody
      })

      console.log(sendInformation);
      
      return true;
    } catch (error) {
      console.log({error});
      
      return false;
      
    }

  }

  
}