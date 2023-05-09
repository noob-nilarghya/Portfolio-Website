
// GSAP animation for hero image
gsap.from(".img", {
    duration: 1.7,
    scale: 0.5,
    opacity: 0,
    delay: 0.7,
    stagger: 0.2,
    ease: "Circ.easeOut",
    force3D: true
});

// GSAP animation for hero text box
gsap.from(".headingMyName", {
    duration: 2,
    x: -400
});
gsap.from(".hero-text", {
    duration: 3,
    opacity: 0,
});

// Smooth Scroll
const learnMore = document.querySelectorAll('.learnMore');
const aboutMe = document.querySelector('#aboutMe');
if(learnMore){
    learnMore.forEach((learn)=>{
        learn.addEventListener('click', (evt) => {
            evt.preventDefault();
            aboutMe.scrollIntoView({ behavior: 'smooth' });
        })
    })
}

const exp= document.querySelector('.experience-nav');
const expSect= document.querySelector('#experience');
if(exp){
    exp.addEventListener('click', (evt) => {
        evt.preventDefault();
        expSect.scrollIntoView({behavior: "smooth"});
    });
}

const skls= document.querySelector('.skill-nav');
const skillSect= document.querySelector('#skills');
if(skls){
    skls.addEventListener('click', (evt) => {
        evt.preventDefault();
        skillSect.scrollIntoView({behavior: "smooth"});
    });
}


const projs= document.querySelector('.project-nav');
const projSect= document.querySelector('#project');
if(projs){
    projs.addEventListener('click', (evt) => {
        evt.preventDefault();
        projSect.scrollIntoView({behavior: "smooth"});
    });
}

const goUp= document.querySelector('.upArrImage');
const heroSect= document.querySelector('#hero');
if(goUp){
    goUp.addEventListener('click', (evt) => {
        evt.preventDefault();
        heroSect.scrollIntoView({behavior: "smooth"});
    });
}


const allsecHeading = document.querySelectorAll('.sectionHeading');

allsecHeading.forEach((secHeading) => {
    const interSection = function (entries, observer) {
        const entry = entries[0];

        if (entry.isIntersecting == true) {

            gsap.from(secHeading, {
                duration: 1.5,
                x: -400
            });


            observer.unobserve(entry.target);
        }
    };

    const sectionObserver = new IntersectionObserver(interSection, {
        root: null,
        threshold: 0.1, // 0.1 means 10% errorMargin
    });

    sectionObserver.observe(secHeading);
});

const twoAboutSection = document.querySelectorAll('.section');

twoAboutSection.forEach((sec) => {
    const interSection = function (entries, observer) {
        const entry = entries[0];

        if (entry.isIntersecting == true) {

            sec.classList.remove('hidden');


            observer.unobserve(entry.target);
        }
    };

    const sectionObserver = new IntersectionObserver(interSection, {
        root: null,
        threshold: 0.1, // 0.1 means 10% errorMargin
    });

    sectionObserver.observe(sec);
});

const expCard = document.querySelector('.card1');
const intersectExpSec = function (entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
        gsap.from(".card1", {
            duration: 5,
            ease: "elastic",
            x: -400
        });
        gsap.from(".card2", {
            duration: 5,
            ease: "elastic",
            x: +400
        });

        observer.unobserve(expCard);
    }
}
const expObserver = new IntersectionObserver(intersectExpSec, {
    root: null,
    threshold: 0.1
});
expObserver.observe(expCard);



const sklCard = document.querySelector('.skillCards');
const intersectSklSec = function (entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
        document.querySelectorAll('.sklWrapper').forEach((skl)=> {
            skl.classList.remove('hidden');
            gsap.from(skl, {
                /*
                duration: 1.5,
                x: 400
                */
                duration: 1.5,
                scale: 0.5,
                opacity: 0,
                delay: 0.7,
                stagger: 0.2,
                // ease: "Bounce.easeOut",
                ease: "Circ.easeOut",
                force3D: true
            });
        })

        observer.unobserve(sklCard);
    }
}
const sklObserver = new IntersectionObserver(intersectSklSec, {
    root: null,
    threshold: 0.1
});
sklObserver.observe(sklCard);




const project = document.querySelector('.projectContent');
const intersectProject = function (entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
        document.querySelectorAll('.cardWrapper').forEach((menu) => {
            menu.classList.remove('hidden');
            gsap.from(menu, {
                /*
                duration: 2,
                scale: 0.5,
                opacity: 0,
                delay: 0.7,
                stagger: 0.2,
                // ease: "Bounce.easeOut",
                ease: "Circ.easeOut",
                force3D: true
                */
                duration: 1.5,
                x: 400
            });
        });
        

        observer.unobserve(project);
    }
}
const projectObserver = new IntersectionObserver(intersectProject, {
    root: null,
    threshold: 0.1
});
projectObserver.observe(project);




const social = document.querySelector('.socialIcons');
const intersectSocial = function (entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
        gsap.from(social, {
            duration: 1.5,
            x: -400
        });
        
        observer.unobserve(social);
    }
}
const socialObserver = new IntersectionObserver(intersectSocial, {
    root: null,
    threshold: 0.1
});
socialObserver.observe(social);
    

