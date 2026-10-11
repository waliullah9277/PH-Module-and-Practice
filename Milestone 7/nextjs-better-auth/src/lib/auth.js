import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from "resend";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db("better-auth-db");
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async({user, url, token}, request)=>{
      void resend.emails.send({
        from: 'onboarding@resend.dev',
        to: user.email,
        subject: "Reset your password",
        html: `
        <h3>Reset Your Password</h3>
        Click the link to reset your password: ${url}
        <p>Are your sure your password is reset now</p>
        `,
      })
    }
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      void resend.emails.send({
        from: 'onboarding@resend.dev',
        to: user.email,
        subject: 'Verify your email address',
        html: `
        <h1>Please Verify your email address</h1>
        Click <a href="${url}">here</a> to verify your email.
        `,
      })
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 7 * 24 * 3600 // 7 days
  },

  socialProviders: {
    google: {
      clientId: process.env.BEETER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.BEETER_AUTH_GOOGLE_SECRET,
    },
    github: {
      clientId: process.env.BEETER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.BEETER_AUTH_GITHUB_SECRET,
    },
  },

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
