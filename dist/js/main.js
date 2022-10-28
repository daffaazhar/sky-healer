let sidebar = document.querySelector("#sidebar");
let humburger = document.querySelector(".humburger");

humburger.onclick = () => {
  humburger.classList.toggle("on");
  sidebar.classList.toggle("on");
};

window.addEventListener("scroll", () => {
  const headers = document.getElementsByTagName("header");
  for (const header of headers) {
    header.classList.toggle("shadow-md", window.scrollY > 0);
  }
});

function showBottomSheet() {
  const bottomSheetContainer = document.querySelector("#bottomSheetContainer");
  const bottomSheet = document.querySelector("#bottomSheetContainer #bottomSheet");

  bottomSheetContainer.classList.add("show");
  setTimeout(() => {
    bottomSheet.classList.add("show");
  }, 1);
}

function hideBottomSheet() {
  const bottomSheetContainer = document.querySelector("#bottomSheetContainer");
  const bottomSheet = document.querySelector("#bottomSheetContainer #bottomSheet");

  bottomSheet.classList.remove("show");
  setTimeout(() => {
    bottomSheetContainer.classList.remove("show");
  }, 400);
}

AOS.init({
  once: true,
});
