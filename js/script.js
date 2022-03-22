var slideNumber = 1;

function moveSlide(n) {
  goToSlide(slideNumber + n);
  n > 0 ? slideNumber++ : slideNumber--;
}

function goToSlide(n) {
  let cards_collection = document.getElementsByClassName(
    "certificates_cards_collection"
  );

  if (cards_collection[n - 1].style.display != "flex") {
    //unhide (n-1)th collection
    cards_collection[n - 1].style.display = "flex";
    let slides_dots = document.getElementsByClassName("dot");
    slides_dots[n - 1].style.backgroundColor = "#636363";

    let slideButtons = document
      .getElementById("div_certificates_carousel")
      .getElementsByTagName("a");
    //hide left button when first collection is displayed
    if (n == 1) {
      slideButtons[0].style.opacity = 0;
      slideButtons[slideButtons.length - 1].style.opacity = 1;
    }
    //hide right button when last collection is displayed
    else if (n == 3) {
      slideButtons[0].style.opacity = 1;
      slideButtons[slideButtons.length - 1].style.opacity = 0;
    }
    //unhide both buttons otheriwse
    else {
      slideButtons[0].style.opacity = 1;
      slideButtons[slideButtons.length - 1].style.opacity = 1;
    }

    //hide other collections
    for (i = 0; i < n - 1; i++) {
      cards_collection[i].style.display = "none";
      slides_dots[i].style.backgroundColor = "unset";
    }
    for (i = n; i < cards_collection.length; i++) {
      cards_collection[i].style.display = "none";
      slides_dots[i].style.backgroundColor = "unset";
    }
  }
}
