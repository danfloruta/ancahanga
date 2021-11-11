const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const sidebarToggle = getElement(".sidebar-toggle");
const sidebar = getElement(".sidebar");
const closeBtn = getElement(".close-btn");
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar after selecting desired section from sidebar

const herStory = document.getElementById("herStory");
const donate = document.getElementById("donate");
// //
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

herStory.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
donate.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
// underline for the selected links
const items = document.querySelectorAll("ul li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    item.classList.add("active");
  });
});

// cand headerul e in view sa fie ::afterul pe el
