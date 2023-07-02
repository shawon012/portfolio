
let nav = document.querySelector('nav');


// Nav Scroll
window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0)
})


// Dynamic Project Section
window.addEventListener('load', () => {
    let DynamicProjects = document.querySelector('.projects');
    DynamicProjects.innerHTML = '';

    projectt.forEach(projectContent => {
        let dynamicProject = document.createElement('article');
        dynamicProject.className = 'project';
        dynamicProject.innerHTML = `
        <img src="${projectContent.img}" alt="">
        <div class="project-shadow">
            <h4>${projectContent.title}</h4>
            <p>${projectContent.des}</p>
            <a href="${projectContent.link}"> <i class="fa fa-link"></i> </a>
        </div>
        `
        DynamicProjects.appendChild(dynamicProject)
    })
})