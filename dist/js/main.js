let sidebar = document.querySelector("#sidebar");
let humburger = document.querySelector(".humburger");

humburger.onclick = () => {
  humburger.classList.toggle("on");
  sidebar.classList.toggle("on");
};
