import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

export default function Profile() {
    const { markdownRemark } = useStaticQuery(graphql`
    query MyQuery {
        markdownRemark(frontmatter: {title: {eq: "Profile"}}) {
          frontmatter {
            title
            role
            name
            linkedIn
            github
            email
          }
          html
        }
      }
  `)

    const { name, github, linkedIn, email, role, resume } = markdownRemark.frontmatter;
    const description = markdownRemark.html
    const handleOpenResume = () => {
        window.open('../Rucheng-Resume.pdf', '_blank')
    }

    return (
        <div className='mx-48 mt-24 pt-24 space-y-6 relative' id='profile'>
            <p className='font-semibold text-gray-500 text-lg'>Hello, I'm</p>
            <div className='flex w-fit py-2 space-x-3 justify-left items-end overflow-hidden whitespace-nowrap animate-typing'>
                <h1 className='text-5xl font-semibold '>{name}</h1>
                <span className='text-4xl font-semibold text-gray-500'>|</span>
                <h1 className='text-2xl font-semibold text-gray-500'>{role}</h1 >
            </div>
            <div className='flex space-x-3 items-center'>
                <a href={linkedIn} target='_blank'><img className="w-6 h-6" src="/icons/linkedin.png" /></a>
                <a href={github} target='_blank'><img className="w-7 h-7" src='/icons/github.svg' /></a>
                <p>{email}</p>
            </div>
            <div className="w-1/2" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="space-x-3">
                <button
                    className="border-2 border-orange-800 p-3 text-orange-800 font-semibold hover:bg-orange-800 hover:text-white"
                    onClick={handleOpenResume}
                >
                    Review Resume
                </button>
                <button className="border-2 border-orange-800 bg-orange-800 p-3 font-semibold text-white hover:text-orange-800 hover:border-orange-800 hover:bg-white" onclick="">
                    Contact Info
                </button>
            </div>
        </div>
    )
}
