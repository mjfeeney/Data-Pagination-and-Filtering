/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// number of students to display per page
let itemsPerPage = 9;

/**
 * Creates and insert/append the elements needed to display a "page" of nine students
 *
 * @param {array} list - choose array of students.
 * @param {page} number - the page number wished to be displayed.
 *
 * @returns - HTML snippet with information for each student in the array.
 */

function showPage(list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      let studentHtml = "";

      // variables for student name info held in student data array in data.js
      let title = `${list[i].name.title}`;
      let firstName = `${list[i].name.first}`;
      let lastName = `${list[i].name.last}`;
      let fullName = title + " " + firstName + " " + lastName;

      // displays HTML snippet for each student with their respective information
      if (i >= startIndex && i < endIndex) {
         studentHtml += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${fullName}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;

         // inserts HTML snippet into index.html at div with class "student-list"
         studentList.insertAdjacentHTML("beforeend", studentHtml);
      };
   }
};


/**
 * Creates and insert/append the elements needed for the pagination buttons
 *
 * @param {array} list - choose array of students.
 *
 * @returns - HTML snippet of buttons at bottom of page to flip through pages of students. 
 */

function addPagination(list) {
   let numOfPages = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   // creates li elements with buttons inside that allows for pagination of data, dynamically updates depending on size of student list
   for (i = 1; i <= numOfPages; i++) {
      let buttonHtml = "";
      buttonHtml += `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML("beforeend", buttonHtml);
   };

   // give first pagination button class name "active"
   document.querySelector(".link-list button").className = "active";
   

   // filter "active" class for pagination buttons when clicked and display proper page
   linkList.addEventListener("click", function(e) {
      let pageButtons = document.querySelectorAll(".link-list button");
      if(e.target.tagName === "BUTTON") {
        document.querySelector(".active").className = " ";
        e.target.className = "active";
        let clickedPage = e.target.textContent;
        showPage(data,clickedPage);
      } 
      
   });

};

// Call functions
showPage(data,1);
addPagination(data);



// Extra Credit

// create search bar
let search = "";
search += `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`;

// append search bar to page
let header = document.querySelector(".header");
header.insertAdjacentHTML("beforeend", search);

let searchBar = document.querySelector("#search");
let searchButton = document.querySelector(".student-search button");
let searchNames = [];

/**
 * Filters Student list based on input typed in the search bar
 *
 * @param {array} list - choose array of students.
 * @param {string} searchText - what text to use to filter through the list.
 *
 * @returns - filters student list based on input and adds student names to a new array "searchNames".
 */
function filterStudents(list, searchText) {
   searchNames = [];
   for (let i = 0; i < list.length; i++) {
      let studentNames = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
      if(studentNames.includes(searchText)) {
         searchNames.push(data[i]);
      };
   }
   
   if (searchNames.length === 0) {
      document.querySelector(".student-list").innerHTML = `<p>No results found</p>`;
      document.querySelector(".link-list").innerHTML = "";
   } else {
      if( searchBar.value.length === 0 ) {
         showPage(data,1);
         addPagination(data);
      } else {
         showPage(searchNames,1);
         addPagination(searchNames);
      }
   }
}


// filter Students list in real time when typing in search bar
searchBar.addEventListener('keyup', function() {
   filterStudents(data, searchBar.value.toLowerCase());
});

// filter Students list when search bar button is clicked
searchButton.addEventListener("click", function() {
   filterStudents(data, searchBar.value.toLowerCase());
   addPagination(searchNames);
});














