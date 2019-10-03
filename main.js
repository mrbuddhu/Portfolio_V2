// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if(this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if(this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// }


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


//Flipping texts
(function() {

      var word = ['Maths', 'Computers', 'AI', 'Robotics', 'Fine Art', 'Education'];
      var element = document.getElementsByTagName('p')[0];
      var wordIndex = 1;

      var resetAnimation = function() {
        element.classList.remove('flip');
      }

      setInterval(function(){
          switch (wordIndex) {
            case 0:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 1;
              setTimeout(resetAnimation, 1000);
            break;

            case 1:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 2;
              setTimeout(resetAnimation, 1000);
            break;

            case 2:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 3;
              setTimeout(resetAnimation, 1000);
            break;

            case 3:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 4;
              setTimeout(resetAnimation, 1000);
            break;
                
                case 4:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 5;
              setTimeout(resetAnimation, 1000);
            break;
                
                case 5:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 0;
              setTimeout(resetAnimation, 1000);
            break;      
          }
      },2000)
}());

/*!
 * Start Bootstrap - Agency v5.2.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

! function (e) {
	"use strict";
	e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = e(this.hash);
			if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
				scrollTop: a.offset().top - 54
			}, 1e3, "easeInOutExpo"), !1
		}
	}), e(".js-scroll-trigger").click(function () {
		e(".navbar-collapse").collapse("hide")
	}), e("body").scrollspy({
		target: "#mainNav",
		offset: 56
	});

	function a() {
		100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
	}
	a(), e(window).scroll(a)
}(jQuery);


