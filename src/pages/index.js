import React from "react";
import { Layout } from "../components";
import { Profile, Skills, Projects, Contact } from "../containers";

const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <main>
        <div className="w-full h-screen mix-blend-multiply animate-bg-moving" style={{ backgroundImage: `url(../images/bg-pic.jpeg)` }}>
          <Profile />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Rucheng R. Portfolio</title>
