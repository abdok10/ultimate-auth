import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "2FA <onboarding@resend.dev>",
    to: email,
    subject: "2 Factor Authentication",
    html: `<p>Your 2FA code: ${token}.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Password Reset <onboarding@resend.dev>",
    to: email,
    subject: "Password Reset",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Email Verification <onboarding@resend.dev>",
    to: email,
    subject: "Email verification",
    // reply_to: senderEmail,
    // react: React.createElement(EmailTemplate),
    html: `<p>Click <a href="${confirmLink}">here</a> to verify your email.</p>`,
  });
};
