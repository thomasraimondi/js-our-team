// * Get Dom element
const memberGrid = document.getElementById("member-grid");

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
  return `<div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="${member.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <div class="job-title">${member.role}</div>
              <div class="mail">${member.email}</div>
            </div>
          </div>
        </div>`;
};

// * Add card in html
let cardsHtml = ``;
for (const member of teamMembers) {
  console.log(member);
  cardsHtml += cardMember(member);
}
memberGrid.innerHTML = cardsHtml;
