const dropdownMenuAnchor = [
  { text: "My account", anchor: "#" },
  { text: "My task", anchor: "#" },
  { text: "Log out", anchor: "#" },
];
const headerMenu = document.querySelector(".header-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuList = document.querySelector(".dropdown-menu-list");
const buttonHeaderMenu = document.querySelector(".button-header-menu");

function createDropdownMenu() {
  if (dropdownMenu.classList.contains("dropdown-menu-active")) {
    dropdownMenu.classList.remove("dropdown-menu-active");
    while (dropdownMenuList.firstChild) {
      dropdownMenuList.removeChild(dropdownMenuList.firstChild);
    }
  } else {
    dropdownMenu.classList.add("dropdown-menu-active");
    for (let i = 0; i < dropdownMenuAnchor.length; i++) {
      dropdownMenuList.insertAdjacentHTML(
        "beforeend",
        `
        <a href="${dropdownMenuAnchor[i].anchor}"><li>${dropdownMenuAnchor[i].text}</li></a>
      `
      );
    }
  }

  return;
}

function rotetedArrow() {
  if (buttonHeaderMenu.classList.contains("rotated-up")) {
    buttonHeaderMenu.classList.remove("rotated-up");
  } else {
    buttonHeaderMenu.classList.add("rotated-up");
  }

  return;
}

headerMenu.addEventListener("click", createDropdownMenu);
headerMenu.addEventListener("click", rotetedArrow);
