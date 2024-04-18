const axios = require('axios')

const send = async ({
  fromName,
  toEmail,
  subject,
  textBody,
  htmlBody
}) => {
  try {
    let result = await axios.post(
      'http://mailer_service:3000/send', {
        fromName: fromName,
        toEmail: toEmail,
        subject: subject,
        textBody: textBody,
        htmlBody: htmlBody
      }
    )
    return result.data
  } catch (error) {
    throw new TypeError(error.message)
  }
}

module.exports.send = send
