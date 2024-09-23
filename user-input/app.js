const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("submitted");
  const data = new FormData(form); //create form data
  const finalValues = Object.fromEntries(data); //create a normal object from form data

  console.log(finalValues);
});

// alternative method

const formColor = document.getElementById("formColor");

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.color.value);
  document.body.style.backgroundColor = event.target.color.value;
}

formColor.addEventListener("submit", handleSubmit);
