const projects [{
        title: "Product-Cards",
        screenshot: "https://snipboard.io/mJxPUX.jpg",
        description: "Using HTML and CSS to create product cards",
        technologiesUsed: "HTML, CSS and Vanilla Javascript",
        available: true,
        url: "https://github.com/tonfaman23/ProductCards",
        githubUrl: "https://github.com/tonfaman23/ProductCards"
}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById;
    selectedDiv.innerHTML = textToPrint;
};

const projectStr = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        domString += '<div class="Project1">';
        domString += `<header>${projects[i].title}</header>`;
        domString += `<img src=${projects[i].screenshot}>`;
        domstring += `<section class="Describe">${projects[i].description}</section>`;
        domstring += `<section class="Link">${projects[i].url}</section>`;
        domstring += '</div>';
    }
    printToDom('projectsPage', domString);
};