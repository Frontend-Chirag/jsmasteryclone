import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 text-white z-50 border-b-2 py-6
     border-black-400 w-full linear'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
         <Link href='/'>
            <Image 
               src='/jsm-logo.svg' 
               width={55} 
               height={40} 
               alt='jsm logo'
            />
         </Link>
          <Image 
             src='/hamburger-menu.svg' 
             alt='hamburger' 
             width={30} 
             height={30}
             className='block md:hidden'
           />
           
           <ul className='flex-center gap-x-8 max-md:hidden md:gap-x-10'>
            <li className='body-text text-gradient_black !font-bold '>
                <Link 
                  href='https://jsmastery.pro/next13'
                  target='_blank' 
                >
                  Next.js 13.4 course
                </Link>

            </li>
            <li>
                <Link 
                  href='https://jsmastery.pro/masterclass'
                  target='_blank' 
                >
                  Masterclass
                </Link>

            </li>
           </ul>
        </div>
    </nav>
  )
}

export default Navbar