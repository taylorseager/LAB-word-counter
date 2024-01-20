console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
let darkMode = false

const wordCounter = (value) => {
  if (value) {
    const arrayOfWords = value.split(' ');
    console.log(arrayOfWords)
    const filteredArray = arrayOfWords.filter(str => str !== '');
    // COMPLETE THE LOGIC 
    wordCount.innerHTML = `Word Count: ${filteredArray.length}`; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = ""; // UPDATE THIS
  }
}

// OPTIONAL CHALLENGE
const toggleMode = document.querySelector('.theme-toggle') => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  // complete the function
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
