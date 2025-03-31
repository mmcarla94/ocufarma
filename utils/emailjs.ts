import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
};

// Function to send feedback via email
export const sendFeedbackEmail = async (message: string) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        to_email: 'ocufarma.app@gmail.com',
        message: message,
        from_name: 'OcuFarma App User',
        reply_to: 'ocufarma.app@gmail.com'
      }
    );
    return response;
  } catch (error) {
    console.error('Error sending feedback email:', error);
    throw error;
  }
};