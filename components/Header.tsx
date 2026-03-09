import React from 'react'
import { SocialIcon } from 'react-social-icons'
import * as motion from "motion/react-client"
import { easeInOut } from 'framer-motion'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { SocialLinks } from '@/lib/types'

type HeaderProps = {
  socialLinks?: SocialLinks;
  email: string;
}

const Header = ({ socialLinks }: HeaderProps) => {
  const socialUrls = [
    socialLinks?.github,
    socialLinks?.linkedin,
    socialLinks?.twitter,
    socialLinks?.instagram,
    socialLinks?.youtube,
  ].filter(Boolean) as string[];

  return (
    <header className='flex flex-row justify-between max-w-5xl z-100 xl:items-center py-2 md:py-3 md:px-5 px-4 mx-auto  sticky top-0'>
        <motion.div
        initial={{
            opacity : 0,
            x: -500,
            scale : 0.5
        }}
        animate={{
            opacity : 1,
            x: 0,
            scale : 1
        }}
        transition={{
            duration : 1,
            ease : easeInOut
        }}
        className='flex flex-row items-center'>
            {socialUrls.map((url) => (
              <SocialIcon
                key={url}
                url={url}
                fgColor='gray'
                bgColor='transparent'
                target='_blank'
              />
            ))}
        </motion.div>

        <Link href={'#contactme'}>
        <motion.div
        initial={{
            x: 500,
            opacity : 0,
            scale : 0.5
        }}
        animate={{
            x: 0,
            opacity : 1,
            scale : 1
        }}
        transition={{
            duration : 1
        }}
        className='flex flex-row items-center justify-center gap-3 text-gray-300 cursor-pointer'>
        <Mail className="text-gray-400 md:mt-0 mt-3" />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header
