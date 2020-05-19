let dropdownHeadingBtn = document.querySelector(".dropdown-heading");
let dropdownOptions = document.querySelectorAll(".dropdown-option");
let difference = document.getElementById("difference");
let positiveFeedback = document.querySelector(".onPlus");
let negativeFeedback = document.querySelector(".onMinus");
let period = document.querySelector(".period");
let sumOfIncomes = document.getElementById("incomes");
let sumOfExpenses = document.getElementById("expenses");

difference.textContent = sumOfIncomes.textContent - sumOfExpenses.textContent;

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

// Wykresy kołowe

// Load google charts
google.charts.load("current", { packages: ["corechart"] });

const drawChartOfIncomes = () => {
  let data = google.visualization.arrayToDataTable([
    ["Kategoria", "Kwota"],
    ["Wynagrodzenie", 5000],
    ["Odsetki bankowe", 300],
    ["Sprzedaż na allegro", 1000],
    ["Inne", 1000],
  ]);

  let options = { title: "Przychody", width: 550, height: 300 };

  let chart = new google.visualization.PieChart(
    document.getElementById("piechart-incomes")
  );
  chart.draw(data, options);
};

const drawChartOfExpenses = () => {
  let data = google.visualization.arrayToDataTable([
    ["Kategoria", "Kwota"],
    ["Jedzenie", 600],
    ["Mieszkanie", 1000],
    ["Transport", 300],
    ["Telekomunikacja", 45],
    ["Opieka zdrowotna", 80],
    ["Ubranie", 225],
    ["Higiena", 44],
    ["Dzieci", 0],
    ["Rozrywka", 24],
    ["Wycieczka", 0],
    ["Szkolenia", 38],
    ["Książki", 24],
    ["Oszczędności", 100],
    ["Na złotą jesień, czyli emeryturę", 500],
    ["Spłata długów", 0],
    ["Darowizna", 100],
    ["Inne wydatki", 200],
  ]);

  let options = { title: "Wydatki", width: 550, height: 300 };

  let chart = new google.visualization.PieChart(
    document.getElementById("piechart-expenses")
  );
  chart.draw(data, options);
};

google.charts.setOnLoadCallback(drawChartOfIncomes);
google.charts.setOnLoadCallback(drawChartOfExpenses);
