import emailjs from '@emailjs/browser'

export const sendEmail = (e, setContactMessage, form) => {
  e.preventDefault()

  emailjs.sendForm('service_o6mm4xf', 'template_zyyc8ng', e.target, 'lwyoo3saojqREaHzC').then(
    (result) => {
      console.log(result.text)

      // Show success message
      setContactMessage('Message sent successfully✅')

      // Remove message after five seconds
      setTimeout(() => {
        setContactMessage('')
      }, 5000)

      // Clear input fields
      form.current.reset()
    },
    (error) => {
      console.log(error.text)

      // Show error message
      setContactMessage('Message not sent (service error, gabisa noob!) ❌')
    }
  )
}
