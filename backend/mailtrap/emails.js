import { mailtrapClient, sender } from './mailtrap.js';
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from './emailTemplates.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationToken
      ),
      category: 'Email Verification',
    });
    console.log('Verification email sent:', response);
  } catch (error) {
    console.error(`Error sending verification email`, error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: '50978deb-1c3d-45c5-9f95-a54553fa2af9',
      template_variables: {
        company_info_name: 'Auth-App',
        name: name,
      },
    });
    console.log('Welcome email sent:', response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

export const sendResetPasswordEmail = async (email, resetToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Reset your password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetToken),
      category: 'Reset Password',
    });
    console.log('Password reset email sent:', response);
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Password reset successful',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: 'Reset Password Success',
    });
    console.log('Password reset success email sent:', response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(
      `Error sending password reset success email: ${error.message}`
    );
  }
};
