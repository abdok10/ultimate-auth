import { EmailTemplate } from "@components/EmailTemplate";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Email Verification",
    to: "abdokarchaoui10@gmail.com",
    subject: "Email verification",
    // reply_to: senderEmail,
    // react: React.createElement(EmailTemplate),
    html: `<p>Click <a href="${confirmLink}">here</a> to verify your email</p>`,
  });
};
