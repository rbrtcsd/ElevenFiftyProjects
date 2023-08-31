const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // Setting a variable that is called baseURL with a value that is the base URL given in the API docs 
const key = 'lWiudD9h4yzZmQ8wNEV066h1mAJAvCL0'; // Setting a variable that is called key with a value that is our personal API key
let url; // Creating a variable called url without a value - establishes variable only 

//SEARCH FORM
const searchTerm = document.querySelector('.search'); // Setting a variable called searchTerm, checking the entire HTML file for the first class called .search, takes the value from that search field and defines the variable
const startDate = document.querySelector('.start-date'); // Setting a variable called startDate, checking the entire HTML file for the first class called .start-date, takes the value from that field and defines the startDate variable
const endDate = document.querySelector('.end-date'); // Setting a variable called endDate, checking the entire HTML file for the first class called .end-date, takes the value from that field and defines the endDate variable
const searchForm = document.querySelector('form'); // Setting a variable called searchForm, checking the entire HTML file for the first class called form, takes the value from form and defines the searchForm variable
const submitBtn = document.querySelector('.submit'); // Setting a variable called submitBtn, checks entire HTML file for the first class called .submit, takes the value from form and defines the submitBtn variable

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next'); // Setting a variable called nextBtn, checking HTML file for first instance of "next" class, defining variable 
const previousBtn = document.querySelector('.prev'); // Setting a variable called previousBtn, checking HTML file for first instance of "prev" class, defining variable 
const nav = document.querySelector('nav'); // Setting a variable called nav, checking HTML file for first instance of "nav" class, defining variable 

//RESULTS SECTION
const section = document.querySelector('section'); // Setting a variable called section, checking HTML file for first instance of "section" tag, defining variable 

nav.style.display = 'none'; // Removing nav bar from page

let pageNumber = 0; // Establishing pageNumber as zero
let displayNav = false; //Establishing a variable boolean called displayNav as false 
//1                     //2  
searchForm.addEventListener('submit', fetchResults); // Adds event listener to the searchForm variable, listening for form to be submitted - if submitted, run fetchResults function?
nextBtn.addEventListener('click', nextPage); // Adds event listener to the nextBtn, listening for user to press next button - if submitted, run nextPage function?
previousBtn.addEventListener('click', previousPage); // Adds event listener to the previousBtn, listening for user to press next button - if submitted, run previousPage function?
//1


function fetchResults(e) { //creating a new event function called fetchResults
  e.preventDefault(); //Default behavior of submitting form is to refresh the page, this prevents that as default
  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //concatenating data to define the url variable - the url that will be sent with the API call 
  if (startDate.value !== '') { // Checks to see if the start date is not blank
    console.log(startDate.value) // console log the start date
    url += '&begin_date=' + startDate.value; // adds the start date to the url 
  };
  if (endDate.value !== '') { // If the end date is not blank
    url += '&end_date=' + endDate.value; // add end date to url 
  };
  //1
  fetch(url) // Starts a promise by sending our url to NYT for data
    .then(function (result) { //Creates a new task that takes the results from our api call 
      return result.json(); // and creates a JSON file with those results
    }).then(function (json) { //Creates a new task 
      displayResults(json); //Runs the displayResults function
    });
}
//2
function displayResults(json) { // Creates a new function called displayResults
  let articles = json.response.docs; // Creates a new variable within the function called articles, defines articles as part of our response from the api call
  console.log(articles) // console logs the variable articles which is now an array of the objects returned in the json file
  while (section.firstChild) { // starts a loop as long as the section has a first child
    section.removeChild(section.firstChild); // removes the first child / clears the results
  }
  if (articles.length === 10) { // checks to see if there are 10 articles in the array
    nav.style.display = 'block'; //shows the nav display if 10 items are in the array
  } else {
    nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
  }
  if (articles.length === 0) { // if items in the array is equal to zero
    console.log("No results"); // console log no results
  } else {
    for(let i = 0; i < articles.length; i++) { // establishes variables for the f elements for each object inside the array as long as the array has one or more objects
      let article = document.createElement('article'); // establishing a variable called article inside the loop to create an article element
      let heading = document.createElement('h2'); // establishing a variable called heading inside the loop, creating an h2 element
      let link = document.createElement('a'); // establishing a variable called link inside the loop to create an anchor element
      let img = document.createElement('img'); // establishes a variable called img inside the loop to create an img element
      let para = document.createElement('p');   //establishes a variable called para inside the loop to create a paragraph element
      let clearfix = document.createElement('div'); //establishes a variable inside the loop called clearfix to create a div element
      let current = articles[i]; //establishes a variable inside the loop called current, defines the variable as the article the loop is currently working on
      console.log("Current:", current); //console logs the word "Current:" with the results of the "current" variable
      link.href = current.web_url; //pulls the web url from our array and creating a link for that web url
      link.textContent = current.headline.main; //pulls our main headline from the array and creates a link
      para.textContent = 'Keywords: '; //Adds "Keywords: " to the begging of our paragraph tag inside the article
      //4
      for(let j = 0; j < current.keywords.length; j++) { //creates a loop checking to see if the article has one or more keywords - runs following code for each keyword in article 
        //5
        let span = document.createElement('span'); //establishing a variable that creates a span element
        //6
        span.textContent += current.keywords[j].value + ' '; //adds keyword from article to span element
        //7
        para.appendChild(span); //appends span element to paragraph element
      }
        //2
        if(current.multimedia.length > 0) { //checking to see if the article has one or more multimedia
          //3
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //Looks at our an object in our array, if the object has one or more multimedia objects, takes the first one, appends it to nytimes.com/, sets the image source 
          //4
          img.alt = current.headline.main; // sets the alt tag has the current headline
        }
      //8
      clearfix.setAttribute('class','clearfix'); //assigning a class called clearfix to our clearfix div, to 
      //9
      article.appendChild(heading); //Calling our heading variable to create a heading element inside our article
      heading.appendChild(link); //Transforms our heading into a link using the link variable
      article.appendChild(img); //Calling the img variable to display an image below the header
      article.appendChild(para); // Using the para variable to display our paragraph and keywords inside the article
      article.appendChild(clearfix); //Using the clearfix variable to add the clearfix div below the paragraph and keywords - this resizes the article and does not allow the img to overflow
      section.appendChild(article); //Create the article and display it on our html page
    }
  }
};
function nextPage(e) { // creates a new function called nextPage
  pageNumber++; //1 // adds one to the page number 
  fetchResults(e);  //2 //runs fetch results with the new page number to get new results
  console.log("Page number:", pageNumber); //3 //console logs the new page number
};
function previousPage(e) { //creates a new function called previousPage
  if(pageNumber > 0) { //1 //checks to see if the page number is one or greater (not the first page)
    pageNumber--; // subtracts one from the page number 
  } else { //if page number is zero (first page)
    return; //ends the if statement and terminates function
  }
  fetchResults(e); //run the fetch results function with new page number
  console.log("Page:", pageNumber); //console log the new page number
};