import { Alert } from 'react-native';

// Interfaccia per i parametri dell'email
interface EmailParams {
  to: string;
  subject: string;
  body: string;
  isHtml?: boolean;
}

// Classe per il servizio di invio email
class EmailService {
  private senderEmail: string = 'ocufarma.app@gmail.com';
  private senderName: string = 'OcuFarma App';
  
  // Metodo per inviare un'email
  async sendEmail(params: EmailParams): Promise<boolean> {
    try {
      // In un'implementazione reale, qui ci sarebbe una chiamata a un servizio di invio email
      // come SendGrid, Mailgun, AWS SES, o un server SMTP
      console.log(`Invio email da ${this.senderEmail} a ${params.to}`);
      console.log(`Oggetto: ${params.subject}`);
      console.log(`Corpo: ${params.body}`);
      
      // Simuliamo l'invio dell'email per scopi di sviluppo
      // In produzione, questo codice verrebbe sostituito con una chiamata API a un servizio di email
      
      // Mostriamo un alert per simulare l'invio dell'email
      Alert.alert(
        "Email inviata",
        `Un'email è stata inviata a ${params.to} dall'indirizzo ${this.senderEmail}`,
        [{ text: "OK" }]
      );
      
      return true;
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      return false;
    }
  }
  
  // Metodo per inviare un'email di verifica
  async sendVerificationEmail(name: string, email: string, token: string): Promise<boolean> {
    const subject = 'Verifica il tuo account OcuFarma';
    
    // In un'implementazione reale, questo sarebbe un link al tuo server o app
    // che gestisce la verifica dell'email
    const verificationLink = `ocufarma://verify?token=${token}`;
    
    const body = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A90E2;">Benvenuto in OcuFarma!</h2>
        <p>Ciao ${name},</p>
        <p>Grazie per esserti registrato a OcuFarma. Per completare la registrazione e attivare il tuo account, clicca sul pulsante qui sotto:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}" style="background-color: #4A90E2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verifica il tuo account</a>
        </div>
        <p>Se il pulsante non funziona, copia e incolla il seguente link nel tuo browser:</p>
        <p>${verificationLink}</p>
        <p>Questo link scadrà tra 24 ore.</p>
        <p>Se non hai richiesto questa email, puoi ignorarla in tutta sicurezza.</p>
        <p>Grazie,<br>Il team di OcuFarma</p>
      </div>
    `;
    
    return this.sendEmail({
      to: email,
      subject,
      body,
      isHtml: true
    });
  }
  
  // Metodo per inviare un'email di reset password
  async sendPasswordResetEmail(email: string, token: string): Promise<boolean> {
    const subject = 'Reimposta la tua password OcuFarma';
    
    // In un'implementazione reale, questo sarebbe un link al tuo server o app
    // che gestisce il reset della password
    const resetLink = `ocufarma://reset-password?token=${token}`;
    
    const body = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A90E2;">Reimposta la tua password</h2>
        <p>Ciao,</p>
        <p>Abbiamo ricevuto una richiesta per reimpostare la password del tuo account OcuFarma. Clicca sul pulsante qui sotto per creare una nuova password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #4A90E2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reimposta password</a>
        </div>
        <p>Se il pulsante non funziona, copia e incolla il seguente link nel tuo browser:</p>
        <p>${resetLink}</p>
        <p>Questo link scadrà tra 1 ora.</p>
        <p>Se non hai richiesto il reset della password, puoi ignorare questa email in tutta sicurezza.</p>
        <p>Grazie,<br>Il team di OcuFarma</p>
      </div>
    `;
    
    return this.sendEmail({
      to: email,
      subject,
      body,
      isHtml: true
    });
  }
}

// Esportiamo un'istanza singleton del servizio
export const emailService = new EmailService();
