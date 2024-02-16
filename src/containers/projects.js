import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

export default function Projects() {
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query ProjectsQuery {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "Project"}}}) {
            nodes {
                frontmatter {
                    slug
                    name
                    slogan
                    featurePic
                    role
                    url
                    github
                    techStack
                  }
                  html
            }
          }
      }
  `)
    const projects = allMarkdownRemark.nodes
    return (
        <div className='mx-48 mt-48' id="projects">
            <div>
                <span className='text-base font-semibold text-gray-500'>Browse My Recent</span>
                <h1 className='text-5xl font-bold'>Projects</h1>
            </div>
            <div className='mt-12 space-y-16'>
                {projects.map((project, index) => (
                    <div key={index} className='grid grid-cols-2'>
                        <div className='justify-self-start hover:scale-90 hover:shadow-xl hover:rounded-xl transition-all ease-in-out duration-700'>
                            <img
                                src={project.frontmatter.featurePic}
                                alt={project.frontmatter.name}
                                className="rounded-xl w-[500px] h-[300px] cursor-pointer"
                                onClick={() => (window.location.replace(`/project/${project.frontmatter.slug}`))}
                            />
                        </div>
                        <div className='ml-6 space-y-5'>
                            <h1 className='text-4xl font-semibold'>{project.frontmatter.name}</h1>
                            <p className="text-gray-500">
                                {project.frontmatter.slogan}
                            </p>
                            <div className="flex space-x-3">
                                {project.frontmatter.techStack.map((tech, index) => (
                                    <span key={index} className="bg-black p-2 text-white">{tech}</span>
                                ))}
                            </div>
                            <a href={`/project/${project.frontmatter.slug}`} className='pt-12 flex justify-start items-center animate-bounce underline text-orange-800 text-xl font-bold cursor-pointer'>
                                Learn More
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </div >
    )
}
