// Sample data for accomplishments
const accomplishmentsData = [
    {
        description: "Web Developer",
        Company: "Bharat Intern",
        Role: "Intern",
        Location: "Remote",
        year: "July 2023-Present.2 months",
        Skills: "HTML, CSS, JS",
    },

    // Add more accomplishments and projects as needed
];
skillData = [
    {
        skill: "C"
    },
    {
        skill: "C++"
    },
    {
        skill: "JAVA"
    },
    {
        skill: "PYTHON"
    },
    {
        skill: "HTML"
    },
    {
        skill: "CSS"
    },
    {
        skill: "JAVASCRIPT"
    }
];

// Function to populate accomplishments list
function populateAccomplishmentsList() {
    const accomplishmentsList = document.getElementById("accomplishmentsList");

    accomplishmentsData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<div><strong>${item.description}</strong> </div>
        <div><strong>Company</strong>: ${item.Company} </div>
        <div><strong>Role</strong>: ${item.Role} </div>
        <div><strong>Location</strong>: ${item.Location} </div>
        <div><strong>Year</strong>: ${item.year} </div>
        <div><strong>Skills</strong>: ${item.Skills} </div>`;
        accomplishmentsList.appendChild(listItem);
    });

}

function populateSkillList() {
    const skillList = document.getElementById("skillList");

    skillData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.skill}</strong>`;
        skillList.appendChild(listItem);
    });
}

// Execute the function on page load
/* window.onload = populateAccomplishmentsList;
window.onload = populateSkillList; */
window.onload = function () {
    populateAccomplishmentsList();
    populateSkillList();
}
