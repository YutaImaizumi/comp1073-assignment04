/* This is my original JavaScript data (Assignment 4). 
   This time mainly add Banner Ad function.
   File name : app.js
   Author's name : Yuta Imaizumi #200333869
   Web site name : Yuta Imaizumi Portfolio */
   

"use strict";

(function () { // IIFE start

function Start() {
  LoadNavBar();
  LoadPageContent();
}

// Loads the Main Navigation using AJAX
function LoadNavBar() {
  let mainNav = document.getElementById("mainNav");
    let navbarHTML;
    let navXHR = new XMLHttpRequest();
    navXHR.open("GET", "./navbar.html", true);
    navXHR.send();

    navXHR.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        navbarHTML = this.responseText;
      }
    };

    // Link button active on each page
   navXHR.addEventListener("load", function() {
      mainNav.innerHTML = navbarHTML;
      switch(document.title) {
        case "Yuta Imaizumi Portfolio | Home":
          let homeLink = document.getElementById("homeLink");
          homeLink.setAttribute("class", "active");
        break;

        case "Yuta Imaizumi Portfolio | Works":
          let projectsLink = document.getElementById("worksLink");
          projectsLink.setAttribute("class", "active");
        break;

        case "Yuta Imaizumi Portfolio | Contact":
          let contactLink = document.getElementById("contactLink");
          contactLink.setAttribute("class", "active");
        break;
      }
    });
}


// Loads the Content for each page using the Document Title
function LoadPageContent() {
  switch (document.title) {
    case "Yuta Imaizumi Portfolio | Home":
      LoadHomePage();
      break;

    case "Yuta Imaizumi Portfolio | Works":
      LoadWorksPage();
      break;

    case "Yuta Imaizumi Portfolio | Contact":
      LoadContactPage();
      break;
  }
}

let data = {};

// Home Page Contents start
function LoadHomePage() {

let XHR = new XMLHttpRequest();
      XHR.open("GET", "./texts.json", true);
      XHR.send();
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          data = JSON.parse(this.responseText);
        }
      };

      XHR.addEventListener("load", function () {

        // TOP H1
        let greetingsMain = document.getElementById("greetingsMain");
        data.greetings.forEach(function (greeting) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <h1 id="greeting">${greeting.message1}</h1>    
          <h1 id="myname">${greeting.message2}</h1>
          <img src="Assets/me.gif" alt="Current pic of Yuta Imaizumi" id="mepic">
          <h2 id="aboutme">${greeting.message3}</h2>
        `;
          greetingsMain.appendChild(newDiv);
        }, this);

        // 3 column
        let aboutmeDetails = document.getElementById("aboutmeDetails");
        data.aboutmedetails.forEach(function (aboutmedetail) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <div class="col-xs-12 col-md-4 adjust-y">
            <h3>${aboutmedetail.message1}</h3>    
            <p id="iconcentr"><i class="fa ${aboutmedetail.icon} fa-3x"></i></p>
            <p>${aboutmedetail.message2}</p>
          </div>
        `;
          aboutmeDetails.appendChild(newDiv);
        }, this);

      });
} // Home Page Contents end


// Works Page Contents start
function LoadWorksPage() {

let XHR = new XMLHttpRequest();
      XHR.open("GET", "./texts.json", true);
      XHR.send();
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          data = JSON.parse(this.responseText);
        }
      };

      XHR.addEventListener("load", function () {

        // TOP H2
        let worksMain = document.getElementById("worksMain");
        data.workstitles.forEach(function (workstitle) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <h2>${workstitle.message1}</h1>    
        `;
          worksMain.appendChild(newDiv);
        }, this);

        // 3 column
        let worksDetails = document.getElementById("worksDetails");
        data.worksdetails.forEach(function (worksdetail) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <div class="col-xs-12 col-md-4 adjust-y">
            <p id="iconcentr"><i class="fa ${worksdetail.icon} fa-3x"></i></p>
            <h3>${worksdetail.company}</h3>    
            <a href="${worksdetail.url}" rel="external" title="${worksdetail.urltitle}"><img id="worksimg" src="${worksdetail.imgpath}" alt="${worksdetail.imgalt}" /></a>
            <p>${worksdetail.workdetail}</p>
          </div>
        `;
          worksDetails.appendChild(newDiv);
        }, this);

      });
} // Works Page Contents end


// Contact Page Contents start
function LoadContactPage() {

let XHR = new XMLHttpRequest();
      XHR.open("GET", "./texts.json", true);
      XHR.send();
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          data = JSON.parse(this.responseText);
        }
      };

      XHR.addEventListener("load", function () {

        // TOP Message
        let contactMain = document.getElementById("contactMain");
        data.contacts.forEach(function (contact) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <h2>${contact.message1}</h2>
          <i class="fa ${contact.icon} fa-2x"></i>
          <h3>${contact.message2}</h3>
          <p id="disclaimer"><small>${contact.message3}</small></p>
        `;
          contactMain.appendChild(newDiv);
        }, this);
      });


      // Display form input data to console (assignment 2)
      
      (function(){
            // Set event button 
            SendButton.addEventListener("click", function(event){
                event.preventDefault();
            
            // Form data store in variables
            let Name = document.getElementById("Name").value;
            let Mail = document.getElementById("Mail").value;
            let Tel = document.getElementById("Tel").value;
            let Message = document.getElementById("Message").value;
            // let SendButton = document.getElementById("SendButton");

            console.info("Name: " , Name);
            console.info("Mail: " , Mail);
            console.info("Tel: " , Tel);
            console.info("Message: " , Message);
            });
        })();

} // Contact Page Contents end

      window.onload = Start;
})(); // IIFE finished