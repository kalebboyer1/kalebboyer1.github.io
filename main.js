const views = {
    "about": `
    <section id="about" class="section">
            <h2>About</h2>
            
            <p>
                <h3>I'm 26, I grew up loving sports and playing football, basketball, and baseball. I ended up
                playing basketball in high school my junior and senior year, and played football my junior year. 
                My opportunity to play sports since I was very young helped me develop great team work/team player skills, 
                leadership skills and being able to adapt under pressure. After high school I was able to live in mexico for 
                2 years helping and serving the people in several different areas. Learning spanish was not easy but it helped 
                me to create good learning habits and to never give up. Now I've picked up other activities like skiing, golfing, 
                wakeboarding, volleyball, and pretty much anything outdoorsy/sporty. Growing up and living in Utah has its perks with all these
                activities but you just have to wait for the right season!</h3> </p>

        </section>
            `,
    "skills": `
    <section id="skills" class="section">
            <h2>Skills</h2>
            <p>
                <img id="html" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png">
                <img id="css" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png">
                <img id="js" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
                <img id="axios" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png">
                <h3>HTML, CSS, Javascript, Axios</h3></p>

        </section>
            `,
    "projects": `
    <section id="projects" class="section">
            <h2>Projects</h2>
            <h3>Capstone:</h3>
            <p> <h3>A tool used to answer all your unknown questions. Tech used is html, css and javascript.</h3>
                <br>
                <div><h3>My github link for this project: <a href="https://github.com/kalebboyer1/Capstone_project" target="blank">https://github.com/kalebboyer1/Capstone_project </a></h3></div>
                <br>
            
                <div><h3>My project demo video: <a href="https://share.vidyard.com/watch/yqHDy7yaFJ7zy87LnJAQHn?" target="blank">https://share.vidyard.com/watch/yqHDy7yaFJ7zy87LnJAQHn?</a></h3></div>
            </p>
                
            </section>
    `,
    "contact": `
    <section id="contact" class="section">
                <h2>Contact</h2>
                <h3>Contact me through LinkedIn and check out some of the coding I've done in Github!</h3>
                <p><h3>LinkedIn:<h3> <a href="https://www.linkedin.com/in/kaleb-boyer-003a29167/" target="blank">https://www.linkedin.com/in/kaleb-boyer-003a29167/</a></p>
                <p><h3>Github profile:<h3> <a href="https://github.com/kalebboyer1" target="blank">https://github.com/kalebboyer1 </a></p>
                
            </section>
    `
}

const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')
console.log(navLinks)

const changeView = evt => {
    let view = evt.target.id
    main.innerHTML = views[view]
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', changeView)
}