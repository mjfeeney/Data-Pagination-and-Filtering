/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

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

      // variables for various student info held in student data array in data.js
      let title = `${list[i].name.title}`;
      let firstName = `${list[i].name.first}`;
      let lastName = `${list[i].name.last}`;
      let fullName = title + " " + firstName + " " + lastName;

      let email = `${list[i].email}`;
      let registeredDate = `${list[i].registered.date}`;
      let regsiteredAge = `${list[i].registered.age}`;

      let pictureLarge = `${list[i].picture.large}`;
      let pictureMedium = `${list[i].picture.medium}`;
      let pictureThumb = `${list[i].picture.thumbnail}`;

      // displays HTML snippet for each student with their respective information
      if (i >= startIndex && i < endIndex) {
         studentHtml += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${pictureLarge}" alt="Profile Picture">
                  <h3>${fullName}</h3>
                  <span class="email">${email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${registeredDate}</span>
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
   let buttons = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   // creates li elements with buttons inside that allows for pagination of data, dynamically updates depending on size of student list
   for (i = 1; i <= buttons; i++) {
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
   let pageButtons = document.querySelectorAll(".link-list button");

   // filter "active" class for pagination buttons when clicked and display proper page
   linkList.addEventListener("click", function(e) {
      if(e.target.tagName === "BUTTON") {
        pageButtons.forEach(el => el.classList.remove('active'));
        e.target.className = "active";
        let clickedPage = e.target.textContent;
        showPage(data,clickedPage);
      } 
      
   });

};


// Call functions
showPage(data,1);
addPagination(data);















