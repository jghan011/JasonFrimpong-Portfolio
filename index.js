function handleClickBio() {
  $(".bioLink").on("click", function (event) {
    $(".bioPage").fadeIn(600);
    $(".projects").hide();
    $(".homePage").hide();
    $(".contactInfo").hide();
  });
}

function handleClickPortfolio() {
  $(".portfolio").on("click", function (event) {
    $(".projects").fadeIn(600);
    $(".homePage").hide();
    $(".contactInfo").hide();
    $(".bioPage").hide();
  });
}

function handleClickHome() {
  $(".home").on("click", function (event) {
    $(".homePage").fadeIn(600);
    $(".projects").hide();
    $(".bioPage").hide();
    $(".contactInfo").hide();
  });
}

function handleClickLabel() {
  $("label").on("click", function (event) {
    $("label").hide();
  });
}

function portfolio() {
  handleClickLabel();
  handleClickBio();
  handleClickPortfolio();
  handleClickHome();
}
$(portfolio);
