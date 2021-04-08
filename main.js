//WEEK 2: Added lists for skills section using JS
const skills = [ 
    {
        "id": "skill-1",
        "title": "HTML | CSS | Javascript",
    },
    {
        "id": "skill-2",
        "title": "C#",
    },
    {
        "id": "skill-3",
        "title": "Python",
    },
    {
        "id": "skill-4",
        "title": "SQL",
    }];

const list = document.getElementById("skills");

function createSessionElement(session) {
    const li = document.createElement("li");
    li.textContent = session.title;
    return li;
};

function displaySkills() {
    for (let i = 0; i < skills.length; i++) {
        const li = createSessionElement(skills[i]);
        list.appendChild(li);
    }
};

displaySkills();

// hide window scroll during site load; set full viewport-height for `spinWrap`
document.body.style.overflowY = "hidden"

//Week 3: Async timeout
setTimeout(spinWrap, 2000);;

function spinWrap (){
    let spinnerWrapper = document.querySelector('.spinner-wrapper');
    spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    // display window scroll after site load
    document.body.style.overflowY = "scroll";
};
