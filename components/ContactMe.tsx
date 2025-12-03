'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const { register, handleSubmit , reset } = useForm<Inputs>()

const submit: SubmitHandler<Inputs> = (data) => {
  const subject = encodeURIComponent(data.subject)
  const body = encodeURIComponent(
    `Hi, my name is ${data.name},\n\n${data.message}\n\n(${data.email})`
  )
  const mailtoLink = `mailto:shaikhtausif089@gmail.com?subject=${subject}&body=${body}`
  
  // Gmail Fallback Link (redirects in the current tab)
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shaikhtausif089@gmail.com&su=${subject}&body=${body}`

  // 1. Attempt the primary action (mailto). This will either open a native client 
  // or a system prompt, causing the user to leave or interact with the browser.
  window.location.href = mailtoLink

  // 2. Set a short timeout for the fallback (e.g., 200ms).
  // If the user's desktop client opens, this script often stops or is irrelevant.
  // If nothing happens (no client configured), the user remains on the page.
  setTimeout(() => {
    // If the user is still here, redirect the current tab to the Gmail link.
    // We use window.location.replace() for a cleaner history (not essential, but good practice).
    window.location.replace(gmailLink)
  }, 200) // 200 milliseconds is usually enough time for the mailto action to start.

  // 3. Reset the form immediately.
  reset();
}

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-6xl justify-evenly items-center mx-auto px-4'>
      <h3 className='uppercase text-gray-500 tracking-[18px] absolute md:top-20 top-16 text-xl'>Contact</h3>

      <div className='flex flex-col space-y-6 pt-24 w-full'>
        <h4 className='text-lg md:text-2xl font-semibold text-center'>
          I have just got what you need.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>let&apos;s talk</span>
        </h4>

        <div className='space-y-5 text-center'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
            <p className='text-md md:text-xl'>+91 8879093649</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
            <p className='text-md md:text-xl break-all'>shaikhtausif089@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
            <p className='text-md md:text-xl '>Mumbra, Thane - Maharashtra 400612.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col space-y-2 w-full max-w-2xl mx-auto px-4'
        >
          <div className='flex flex-row gap-2 w-full'>
            <input
              {...register('name', {
                required: 'Name is required',
                min: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                max: {
                  value: 20,
                  message: 'Name cannot exceed 20 characters',
                },
              })}
              placeholder='Name'
              className='contactInput w-1/2'
              type='text'
            />
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder='Email'
              className='contactInput w-1/2'
              type='email'
            />
          </div>

          <input
            {...register('subject', { required: 'Subject is required' })}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-3 px-8 rounded-md text-black font-semibold hover:scale-105 transition-transform duration-200'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
