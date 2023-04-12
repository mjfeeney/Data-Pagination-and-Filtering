/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

let itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
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
      } else {
         console.log("nope")
      };
   }

   
};

showPage(data,1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let buttons = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   for (i = 1; i <= buttons; i++) {
      let buttonHtml = "";
      buttonHtml += `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML("beforeend", buttonHtml);
   };
   // create button elements
   // append buttons
};


// Call functions
addPagination(data);















