import React from 'react'


export default function Skills() {
    const skills = [
        {
            name: "HTML",
            icon: "../icons/tech-icon/html.svg"
        },
        {
            name: "CSS",
            icon: "../icons/tech-icon/css.svg"
        },
        {
            name: "Tailwind",
            icon: "../icons/tech-icon/tailwind.svg"
        },
        {
            name: "JavaScript",
            icon: "../icons/tech-icon/js.svg"
        },
        {
            name: "TypeScript",
            icon: "../icons/tech-icon/ts.svg"
        },
        {
            name: "React",
            icon: "../icons/tech-icon/react.svg"
        },
        {
            name: "Redux",
            icon: "../icons/tech-icon/redux.svg"
        },
        {
            name: "MongoDB",
            icon: "../icons/tech-icon/mongodb.svg"
        },
        {
            name: "NodeJS",
            icon: "../icons/tech-icon/nodejs.svg"
        },
        {
            name: "Express",
            icon: "../icons/tech-icon/expressjs.svg"
        },
        {
            name: "Git",
            icon: "../icons/tech-icon/git.svg"
        },
        {
            name: "GitHub Action",
            icon: "../icons/tech-icon/github.svg"
        },
        {
            name: "SocketIO",
            icon: "../icons/tech-icon/socketio.svg"
        },
        {
            name: "AWS EC2/S3",
            icon: "../icons/tech-icon/aws.svg"
        },
        {
            name: "RESTful API",
            icon: "../icons/tech-icon/restapi.svg"
        },

    ]
    return (
        <div className='mx-48 mt-24 space-y-12 ' id='skills'>
            <div>
                <span className='text-base font-semibold text-gray-500'>Skills & Tools</span>
                <h1 className='text-5xl font-bold'>My Toolbox & Things I Can DO</h1>
            </div>
            <div className="grid grid-cols-8 gap-y-5">
                {skills.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <img src={skill.icon} alt={skill.name} className="w-20 h-20 transition-all ease-in-out duration-400 hover:scale-75" />
                        <h3 className=''>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
