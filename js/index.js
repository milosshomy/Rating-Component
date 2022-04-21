const rating = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit-btn");
const box = document.querySelector(".hide");
const select = document.querySelector(".select");
const box2 = document.querySelector(".box");

rating.forEach((rating) => {
  console.log(rating);

  rating.addEventListener("click", (e) => {
    let number = e.target.value;

    submitBtn.addEventListener("click", () => {
      select.innerHTML = `You selected ${number} of 5`;
      box2.style.display = "none";
      box.style.display = "block";
    });
  });
});
