import  { envs }  from "../../config/plugins/envs.plugin";
import nodemailer from 'nodemailer';
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export interface SendMailOptcions {
  to: string | string[],           // Destino
  subject: string,      // Titulo del correo
  htmlBody: string,     // Contenido del correo
  attachments?: Attachment[], // Archivos adjuntos
}

interface Attachment {
  fileName: string;
  path: string;
}

export class EmailService {

  constructor(){}

  private  transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE, 
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAIL_SECRET_KEY,
    }
  });
  

  async sendEmail(options: SendMailOptcions):Promise<boolean>{
    
    const { to, subject, htmlBody, attachments = [] } = options;

    try {

      const sendInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });

      // console.log(sendInformation);
        
      return true;
      
    } catch (error) {

      return false;
      
    }

  }

  async sendEMailWithFileSystemLogs(to: string | string[]) {

    const subject = 'Logs del server';
    const htmlBody = `
      <h3>Logs de sistem - NOC</h3>
      <p>Probando la notificación del sistema de Logs de NOC</p>
      <p>Ver Logs adjuntos</p>
    `;

    const attachments: Attachment[] = [
      { fileName: 'logs-all.log', path: './log/logs-all.log'},
      { fileName: 'logs-high', path: './log/logs-high.log'},
      { fileName: 'logs-medium ', path: './log/logs-medium.log'},
    ];

    return this.sendEmail({ 
      to,
      subject,
      htmlBody,
      attachments
    })
  }

  
}