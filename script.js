const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

let isHidden = true;

function toggleView() {
    if (isHidden) {
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputField["name"].value}</h1>
                    <h4>${inputField["title"].value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        ${createBox("Objective", inputField["objective"].value)}
                        ${createBox("Skills", inputField["skills"].value)}
                        ${createBox("Academic Details", inputField["academic_details"].value)}
                        ${createBox("Contact", inputField["contact"].value)}
                    </div>
                    <div class="right">
                        ${createBox("Work Experience", inputField["work_experience"].value)}
                        ${createBox("Achievements", inputField["achievements"].value)}
                        ${createBox("Projects", inputField["projects"].value)}
                    </div>
                </div>
            </div>
            <button onclick="window.print()" class="print-button">Print Resume</button>
        `;
    } else {
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

function createBox(title, content) {
    return `
        <div class="box">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
}
