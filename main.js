console.log("Is function working?")
const projects = [{
        title: "Product-Cards",
        screenshot: "https://i.paste.pics/caae05049950babb486540c52cfb0ef0.png",
        description: "Using HTML and CSS to create product cards",
        technologiesUsed: "HTML, CSS and Vanilla Javascript",
        available: true,
        url: "https://github.com/tonfaman23/ProductCards",
        githubUrl: "https://github.com/tonfaman23/ProductCards"
}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (projectArray) => {
    let domString = '';
    for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].available){
        domString += '<div class="Project">';
        domString += `<header>${projectArray[i].title}</header>`;
        domString += `<img src=${projectArray[i].screenshot}>`;
        domString += `<p class="Scribe">${projectArray[i].description}</p>`;
        domString += `<section class="Link">${projectArray[i].url}</section>`;
        domString += '</div>';
        }
    }
    printToDom('projectsPage', domString);
};

createProjectCards(projects);