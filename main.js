let sectionSkills = document.querySelector('#sectionskills');
let cardSkills = sectionSkills.querySelectorAll('.section__flexbox');
let skillsY = sectionSkills.offsetTop;
let skillsSeen = false;

let sectionExp = document.querySelector('#sectionexperience')
let expSkills = sectionExp.querySelectorAll('.section__flexbox');
let expY = sectionExp.offsetTop;
let expSeen = false;

// get element > element.classList.add('classname')



window.addEventListener('scroll', event => {
    console.log(window.scrollY + window.innerHeight);

    if (!skillsSeen && window.scrollY + window.innerHeight >= skillsY) {
        cardSkills.forEach((e) => {
            e.classList.add('fader');
        });
        skillsSeen = true;
    }

    if (!expSeen && window.scrollY + window.innerHeight >= expY) {
        expSkills.forEach((e) => e.classList.add('fader'));
        expSeen = true;
    }

});

function scroller(tag) {
    document.querySelector(tag).scrollIntoView(
        { behavior: 'smooth' }
    );
}