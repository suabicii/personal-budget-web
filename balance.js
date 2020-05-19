let dropdownHeadingBtn = document.querySelector(".dropdown-heading");
let dropdownOptions = document.querySelectorAll(".dropdown-option");
let difference = document.getElementById("difference");
let positiveFeedback = document.querySelector(".onPlus");
let negativeFeedback = document.querySelector(".onMinus");
let period = document.querySelector(".period");

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

const getFeedback = () => {
  if (difference.textContent > "0") {
    positiveFeedback.style.display = "inline";
    negativeFeedback.style.display = "none";
  } else {
    positiveFeedback.style.display = "none";
    negativeFeedback.style.display = "inline";
  }
};

const choosePeriod = () => {
  dropdownOptions.forEach((option) => {
    option.addEventListener("click", () => {
      let optionID = option.getAttribute("id");

      if (optionID == "current-month")
        period.textContent = "z bieżącego miesiąca";
      else if (optionID == "previous-month")
        period.textContent = "z poprzedniego miesiąca";
      else if (optionID == "current-year")
        period.textContent = "z bieżącego roku";
      else period.textContent = "z wybranego okresu";
    });
  });
};

dropdownHeadingBtn.addEventListener("mouseover", toggleMenuOptions);
dropdownHeadingBtn.addEventListener("click", toggleMenuOptions);
document.addEventListener("click", () => {
  dropdownOptions.forEach((option) => {
    option.style.display = "none";
  });
});
chooseMenuOption();
getFeedback();
choosePeriod();
