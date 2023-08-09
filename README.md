# Portfolio-website-
*This is the portfolio website made by me using HTML. 

<!DOCTYPE html>
<html>

<head>
    <title>HARSH KUMAR NAYAK - Portfolio</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
</head>

<body>
    <header>
        <div class="container">
            <div class="profile-photo"></div>
            <h1>HARSH KUMAR NAYAK</h1>
            <nav>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experiences">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <!-- Add more sections if needed -->
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="ABOUT">
            <div class="container">
                <h2>ABOUT ME</h2>
                <p>I am a web developer with a passion for creating beautiful and functional websites. I am proficient
                    in HTML,
                    CSS, JavaScript, C, C++, and Python. I am also familiar with a variety of web development
                    frameworks, such
                    as React, Angular, and Django.</p>
                <p>I am a hard worker and I am always eager to learn new things. I am also a team player and I am always
                    willing
                    to help others.</p>
            </div>
        </section>
        <section id="SKILLS">
            <div class="container">
                <h2>SKILLS</h2>
                <ul id="skillList">
                    <!-- JavaScript will populate this section -->
                </ul>
            </div>
        </section>
        <section id="experiences">
            <div class="container">
                <h2>WORK EXPERIENCE</h2>
                <ul id="accomplishmentsList">
                    <!-- JavaScript will populate this section -->
                </ul>
            </div>
        </section>

        <section id="education">

            <!--Section 5: Education and Skills-->

            <div class="container">
                <h2>EDUCATION</h2>
                <table class="table-style">
                    <tr>
                        <td><u>B.Tech:</u> KIIT UNIVERSITY </td>
                        <td>2021-25</td>
                    </tr>
                    <tr>
                        <td><u>STD XII:</u> TENDER HEART SCHOOL </td>
                        <td>2020-2021</td>
                    </tr>
                    <tr>
                        <td><u>STD X:</u> TENDER HEART SCHOOL </td>
                        <td>2018-2019</td>
                    </tr>
                </table>
            </div>
        </section>

        <!-- Add more sections to showcase your work, skills, and experiences -->

    </main>

    <footer class="footer-basic">
        <h2>CONTACT</h2>
        <div class="container">

            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i
                        class="icon ion-social-snapchat"></i></a><a href="#"><i
                        class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="./index.html">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>


            <p>&copy; 2023 HARSH KUMAR NAYAK. All rights reserved.</p>
            <!-- Add any additional contact information or links here -->
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>

*This is the portfolio website made by me using CSS.

/* Add your CSS styles here to style the portfolio website */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-image: url("./img/66463102.jpg");
  color: #000000;
  text-align: center;
  padding: 40px 0;
}


header .profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("./img/IMG20220403113910.jpg");
  background-size: cover;
  background-position: center;
  margin: 0 auto 20px;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

header h1 {
  margin: 0;
  font-size: 36px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #000000;
  text-decoration: none;
}

main {
  padding: 40px 0;
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}

section {
  margin-bottom: 60px;
}

section h2 {
  margin-bottom: 20px;
  font-size: 30px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}


/* Fifth section */



.footer-basic {
  padding: 40px 0;
  color: #4b4c4d;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-basic li {
  padding: 0 10px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  opacity: 1;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social>a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social>a:hover {
  opacity: 0.9;
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 0;
}

* This is the portfolio website made by me using JAVASCRIPT.

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
