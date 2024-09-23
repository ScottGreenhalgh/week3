async function getFoxes() {
  const foxInfo = await fetch(`https://randomfox.ca/floof/`);

  const finalFoxInfo = await foxInfo.json();
  console.log(finalFoxInfo);

  return finalFoxInfo;
}

function displayFoxes(foxImageData) {
  console.log(foxImageData);
  const image = document.getElementById("fox-image");
  image.src = foxImageData.image;
  image.alt = "random fox image";
}

async function addFoxesToPage() {
  const thisFoxImageData = await getFoxes();
  displayFoxes(thisFoxImageData);
}

// addFoxesToPage();

// alternative syntax

function dotThen() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      console.log("HTTP Response:", response);
      return response.json();
    })
    .then(function (json) {
      console.log("JSON Data:", json);
    });
}

// json placeholder

function placeholderFetch() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      console.log("HTTP Response:", response);
      return response.json();
    })
    .then(function (json) {
      console.log("JSON Data:", json);
    });
}

placeholderFetch();

async function getData(bird) {
  const res = await fetch(
    `https://xeno-canto.org/api/2/recordings?query=${birds}`
  );

  const data = await res.json();
  console.log(data);
}

// creating html elements using api data

const container = document.getElementById("container");

function createImage(apiimage) {
  const foxImage = document.createElement("img");

  foxImage.src = apiimage.image;
  foxImage.alt = "a randomly generated fox image";
  foxImage.id = "fox-image";
  container.appendChild(foxImage);
}

async function addImageToPage() {
  const apiimageData = await getFoxes();
  createImage(apiimageData);
}

addImageToPage();

// creating html element with a different api

async function getCensus() {
  const census = await fetch(
    `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest`
  );

  const censusInfo = await census.json();
  console.log(censusInfo);

  return censusInfo;
}

function createText(apidata) {
  const censusPdata = document.createElement("p");
  const censusPsource = document.createElement("p");

  censusPdata.textContent = `For the year ${apidata.data[0].Year} in the ${apidata.data[0].Nation}, the population was recorded at ${apidata.data[0].Population}.`;
  censusPdata.id = "census-data";

  censusPsource.textContent = `${apidata.source[0].annotations.source_description} by the ${apidata.source[0].annotations.source_name} covering the topics of ${apidata.source[0].annotations.topic} and ${apidata.source[0].annotations.subtopic}.`;
  censusPsource.id = "census-source";

  container.appendChild(censusPdata);
  container.appendChild(censusPsource);
}

async function addTextToPage() {
  const apiTextData = await getCensus();
  createText(apiTextData);
}

addTextToPage();
