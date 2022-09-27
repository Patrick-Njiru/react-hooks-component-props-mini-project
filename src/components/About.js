import React from "react"

// placeholder image = "https://via.placeholder.com/215"
function About({
    about, 
    image="https://via.placeholder.com/215"}) {
    // console.log(blogImage)
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About