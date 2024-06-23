

const confirmApplicationSubmission = ({ name }) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #007bff;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                }
                .content {
                    padding: 20px;
                }
                .content p {
                    margin: 0 0 10px;
                }
                .footer {
                    background-color: #007bff;
                    color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-size: 12px;
                }
                @media (max-width: 600px) {
                    .container {
                        padding: 0 10px;
                    }
                    .content {
                        padding: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Application Confirmation</h1>
                </div>
                <div class="content">
                    <p>Dear ${name},</p>
                    <p>Thank you for registering your application for our program. We have received your application and will process it shortly.</p>
                    <p>If you have any questions, please feel free to reach out to us.</p>
                    <p>Best regards,</p>
                    <p>The Program Team</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Program Team. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

export default confirmApplicationSubmission;





