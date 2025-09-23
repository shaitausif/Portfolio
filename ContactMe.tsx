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
    const mailtoLink = `mailto:shaikhtausif089@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${data.name},\n\n${data.message}\n\n(${data.email})`
    )}`

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shaikhtausif089@gmail.com&su=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${data.name},\n\n${data.message}\n\n(${data.email})`
    )}`

    // Try opening mailto link first
    window.location.href = mailtoLink

    reset();

    // Optional: set a timeout for fallback Gmail link (in case mailto doesn't open anything)
    setTimeout(() => {
      const isDesktop = window.innerWidth > 768
      if (isDesktop) {
        window.open(gmailLink, '_blank')
      }
    }, 500)
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
