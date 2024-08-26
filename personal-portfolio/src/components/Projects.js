import React from 'react';


const Projects = () => {
  return (
    <>
        <h1 className="projects-text">
            <span>Projects</span>
        </h1>

        <div className='timeline'>

            <div className='timeline-container left-container'>
                <div className='timeline-textbox'>
                    <h2>Library Management Website</h2>
                    <small>Mar 2023 - July 2023</small>
                    <p>
                    Technical Stack: HTML, CSS, Vuejs, MDB. <br/><br/>
                    Build a library website to manage book rentings, searching for desired
                    books, log‑in actions and applying fees for users which do not return
                    books on time.</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container right-container'>
                <div className='timeline-textbox'>
                    <h2>Mini Film Website</h2>
                    <small>May 2024 - June 2024</small>
                    <p>
                    Technical Stack: HTML, CSS, ReactJS. <br/><br/>
                    A website which displays movies with fetching api from public data on the Internet.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container left-container '>
                <div className='timeline-textbox'>
                    <h2>Financial Freedom Point Calculator</h2>
                    <small>Oct 2023 - Dec 2023</small>
                    <p>
                    Technical Stack: HTML, CSS, TypeScript, Angular. <br/><br/>
                    An online calculator to assist people in determining their level of
                    financial independence by calculating the quantity of investments or
                    savings.</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container right-container'>
                <div className='timeline-textbox'>
                    <h2>Laptop Website</h2>
                    <small>Dec 2023 - Now</small>
                    <p>
                    Technical Stack: Wix Studio.<br/><br/>
                    A laptop website designed for personal business purposes.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container left-container'>
                <div className='timeline-textbox'>
                    <h2>To-Do App</h2>
                    <small>May 2024</small>
                    <p>
                    Technical Stack: HTML, CSS, ReactJS.<br/><br/>
                    An application which displays actions entered, updated and deleted by users and a list of actions will be shown by different colors. </p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container right-container'>
                <div className='timeline-textbox'>
                    <h2>Personal Portfolio</h2>
                    <small>July 2024</small>
                    <p>
                    Technical Stack: HTML, CSS, SCSS, Bootstrap, ReactJS.<br/><br/>
                    A personal website designed for introducing myself, such as skills, projects experienced and links to other individual social media networks.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>

        </div>
    </>
  )
}

export default Projects
