import React from 'react'

export default function Contact() {
    return (
        <div className='mx-48 mt-48' id='contact'>
            <div className='flex flex-col'>
                <span className='text-base font-semibold text-gray-500'>Keep In Touch</span>
                <h1 className='text-5xl font-bold'>Contact</h1>
                <div className='mt-16 mb-36 p-5 flex w-1/2 self-center justify-center space-x-12 border-2 border-black rounded-2xl'>
                    <div className="flex space-x-2 items-center">
                        <img
                            src="./icons/email.png"
                            alt="Email icon"
                            className="w-9 h-9"
                        />
                        <p>
                            <a href="mailto:rrcjadework@gmail.com">rrcjadework@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <img
                            src="./icons/linkedin.png"
                            alt="LinkedIn icon"
                            className="w-8 h-8"
                        />
                        <p>
                            <a href="https://www.linkedin.com/in/ruchengRen/" target="_blank"
                            >LinkedIn</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
