let dropdownHeadingBtn = document.querySelector(".dropdown-heading");
let dropdownOptions = document.querySelectorAll(".dropdown-option");

const toggleMenuOptions = () => {
  dropdownOptions.forEach((option) => {
    if (option.style.display == "block") option.style.display = "none";
    else option.style.display = "block";
  });
};

const chooseMenuOption = () => {
  dropdownOptions.forEach((option) =>
    option.addEventListener("click", () => {
      dropdownHeadingBtn.textContent = option.textContent;
      toggleMenuOptions();
    })
  );
};

dropdownHeadingBtn.addEventListener("mouseover", toggleMenuOptions);
dropdownHeadingBtn.addEventListener("click", toggleMenuOptions);
chooseMenuOption();
