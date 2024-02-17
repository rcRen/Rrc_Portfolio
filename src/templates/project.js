import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

export default function Project({ data, location }) {
    console.info(location)
    const { html } = data.markdownRemark;
    const { name, slogan, techStack, github, url } = data.markdownRemark.frontmatter
    return (
        <Layout location={location} className="bg-slate-100">
            <div className='my-24 py-24 mx-48 space-y-8'>
                <div className='flex space-x-3 items-center'>
                    <h1 className='text-4xl font-semibold'>{name}:</h1><span className='text-2xl font-semibold text-gray-500'>{slogan}</span>
                </div>
                <div className='flex flex-row space-x-3'>
                    <a className="font-bold relative w-fit block after:block after:content-[''] after:absolute after:h-1 after:bg-orange-800 after:w-full after:scale-x-0 hover:text-orange-800 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href={github}><img className='w-6 h-6 inline align-middle' src={`${__PATH_PREFIX__}/icons/github.svg`} />GITHUB REPO</a>
                    <a className="font-bold relative w-fit block after:block after:content-[''] after:absolute after:h-1 after:bg-orange-800 after:w-full after:scale-x-0 hover:text-orange-800 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href={url}><img className='w-6 h-6 inline align-middle' src={`${__PATH_PREFIX__}/icons/link.svg`} />LIVE DEMO</a></div>
                <div className="flex space-x-3">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-black p-2 text-white">{tech}</span>
                    ))}
                </div>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectQuery ($slug:String!){
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        name
        slogan
        techStack
        title
        email
        github
        url
      }
    }
  }
`