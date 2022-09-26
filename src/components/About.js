import React from "react"

// placeholder image = "https://via.placeholder.com/215"
function About({
    blogAbout, 
    blogImage="https://via.placeholder.com/215"}) {
    // console.log(blogImage)
    return (
        <aside>
            <img src={blogImage} alt="blog logo"/>
            <p>{blogAbout}</p>
        </aside>
    )
}

export default About