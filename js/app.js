// can fill in at this for the input
const kdmvAhJmSiemArray = [
  "កាដួយម៉ែអាសៀម",
  "អាចុយម្រាយសៀម",
  "ទឹកដីម៉ែឪហែងទុកនៅហ្នឺង",
  "ខ្មែរថែដីខ្មែរអត់ត្រូវការហែងមកថែជំនួស",
  "អាចោរសៀមឈ្លានពាន",
  "អាព្រេតលើដី",
  "អាព្រេតក្នុងអាស៊ាន",
  "អាចំណីសត្វត្មាត",
  "អាអ្នកមានចរិកថោក",
  "អាអ្នកមានចរិកអាចម៍",
];

let isKdmvAhJmSiemClicked = undefined;
let index = 0;
let intervalId;

// handle click event
document.getElementById("kdmvAhJmSiemClick").onclick = function () {
  const resultDiv = document.getElementById("result");

  // handle loading for the first click
  if (isKdmvAhJmSiemClicked === undefined) {
    resultDiv.innerHTML = "...";
    resultDiv.classList.add("loading");
  }

  // change the variable based on occurrence of the clicked
  isKdmvAhJmSiemClicked = !isKdmvAhJmSiemClicked;

  // handle change the text value and background color of the button
  const kdmvAhJmSiemBtn = document.getElementById("kdmvAhJmSiemClick");
  if (!isKdmvAhJmSiemClicked) {
    // stop the interval
    clearInterval(intervalId);

    kdmvAhJmSiemBtn.innerHTML = "ចាប់ផ្តើមជេរបន្ត";
    kdmvAhJmSiemBtn.style.backgroundColor = "#185abd";

    // return nothing to stop executing the below code
    return;
  } else {
    kdmvAhJmSiemBtn.innerHTML = "ឈប់ជេរបន្តិចសិន";
    kdmvAhJmSiemBtn.style.backgroundColor = "#E10020";
  }

  // start the interval for each 1 second
  intervalId = setInterval(() => {
    // if the input exceeded, then reset the index
    if (kdmvAhJmSiemArray.length <= index) index = 0;

    // handle the text and remove the loading style
    resultDiv.innerHTML = `<b>${kdmvAhJmSiemArray[index]}</b>`;
    resultDiv.classList.remove("loading");

    // increment the index
    index += 1;
  }, 1000);
};
