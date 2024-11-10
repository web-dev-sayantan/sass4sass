import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmailOtp = async ({
  email,
  otp,
  from = "saas4saas@resend.dev",
  subject = "Hey there!",
}: {
  email: string;
  otp: string;
  from?: string;
  subject?: string;
}) => {
  const response = await resend.emails.send({
    from,
    to: email,
    subject,
    html: `
      <p>Your OTP is: <strong>${otp}</strong></p>
      <p>This will be valid for 5 minutes. If you did not request this, please ignore this email.</p>
    `,
  });
};
