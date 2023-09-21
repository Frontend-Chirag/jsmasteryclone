import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between w-full body-text gap-y-10 border-t
     border-black-400 px-20 py-4 max-md:flex-col'>
        <p>
          Copyright © 2023 JS Mastery Pro | All Rights Reserved
        </p>
        <div className='flex gap-x-9'>
           <Link href='/terms-of-use'>
            Terms & Policy
           </Link>
           <Link href='/privacy-policy'>
             Privacy Policy
           </Link>
        </div>
    </footer>
  )
}

export default Footer