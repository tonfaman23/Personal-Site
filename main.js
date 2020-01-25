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

const projectStr = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        domString += '<div class="Project">';
        domString += `<header>${projects[i].title}</header>`;
        domString += `<img src=${projects[i].screenshot}>`;
        domString += `<p class="Scribe">${projects[i].description}</p>`;
        domString += `<section class="Link">${projects[i].url}</section>`;
        domString += '</div>';
    }
    printToDom('projectsPage', domString);
};

projectStr();