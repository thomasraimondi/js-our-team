// * Get Dom element
const memberGrid = document.getElementById("member-grid");
const addNewMember = document.getElementById("add-new-member");
const accordion = document.querySelector(".accordion-button");

// * Get User Input
const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userRole = document.getElementById("user-job-title");
const userEmail = document.getElementById("user-email");
const userImg = document.getElementById("user-img-path");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// * Create card member
const cardMember = (member) => {
  const { name, role, email, img } = member;
  return `<div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img src="${img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <div class="job-title">${role}</div>
              <div class="mail">${email}</div>
            </div>
          </div>
        </div>`;
};

// * Add card in html
const renderTeams = (teamMembers) => {
  let cardsHtml = ``;
  for (const member of teamMembers) {
    cardsHtml += cardMember(member);
  }
  memberGrid.innerHTML = cardsHtml;
};

// * Load Memebers
renderTeams(teamMembers);

//* Add new member from form
addNewMember.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = userName.value + userSurname.value;
  const role = userRole.value;
  const email = userEmail.value;
  const img = `./img/${userImg.value}`;

  const member = { name, role, email, img };
  teamMembers.push(member);
  accordion.click();
  renderTeams(teamMembers);
  userName.requestFullscreen();
  userSurname.requestFullscreen();
  userRole.requestFullscreen();
  userEmail.requestFullscreen();
  userImg.requestFullscreen();
});
