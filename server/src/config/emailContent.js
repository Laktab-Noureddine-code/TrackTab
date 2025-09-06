export const html = (email) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to TrackTab</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin:0; padding:0;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; margin-top:20px; border-radius:8px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      <tr>
        <td style="background:#4f46e5; color:#ffffff; text-align:center; padding:20px;">
          <h1 style="margin:0; font-size:24px;">Welcome to <span style="color:#ffdd57;">TrackTab</span> 🚀</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:20px; color:#333;">
          <p style="font-size:16px;">Hello <strong>${email}</strong>,</p>
          <p style="font-size:16px; line-height:1.6;">
            We're excited to have you on board! Your account has been successfully created and is ready to use.
          </p>
          <p style="font-size:16px; line-height:1.6;">
            Use TrackTab to easily manage your expenses, track your budget, and stay in control of your finances.
          </p>
          <div style="text-align:center; margin:30px 0;">
            <a href="https://yourwebsite.com/login" target="_blank" 
              style="background:#4f46e5; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block;">
              Get Started
            </a>
          </div>
          <p style="font-size:14px; color:#777;">
            If you didn’t create this account, please ignore this email.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#f3f4f6; text-align:center; padding:15px; font-size:12px; color:#666;">
          &copy; ${new Date().getFullYear()} TrackTab. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};
