const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    const parent = e.target.parentElement.classList.toggle("active");
    const childElement = e.target.childNodes[1];
    if (childElement.innerHTML === "+") {
      childElement.innerHTML = "&#10005;";
    } else {
      childElement.innerHTML = "&#43;";
    }
    console.log(childElement);
  });
});
