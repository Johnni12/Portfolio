// Contact.js
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

   
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(
        'service_9js7kc5',
        'template_h2xdv1d', 
        templateParams,
        'W4Cr2IWqMM7P8FJh0' 
      )
      .then((response) => {
        console.log('Email sent successfully:', response)
       
      })
      .catch((error) => {
        console.error('Email failed to send:', error)
       
      })

   
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div id='contact' className='mb-14'>
      <h1 className='mx-2 text-darkGrayishBlue mb-4 ml-6 text-3xl'>Contact</h1>
      <form className='ml-6 mr-5' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-lg font-semibold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full p-2 border bg-darkGrayishBlue border-darkGrayishBlue rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-lg font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border bg-darkGrayishBlue border-darkGrayishBlue rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-lg font-semibold mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            className='w-full p-2 border bg-darkGrayishBlue border-darkGrayishBlue rounded'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-BlueGradient text-white py-2 px-6 rounded-full hover:bg-darkGrayishBlue'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
