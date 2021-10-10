//Flipping texts
(function() {

      var word = ['Computer Science', 'AI', 'Cybersecurity', 'Robotics', 'Mathematics', 'Fine Art', 'Education'];
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
              wordIndex = 6;
              setTimeout(resetAnimation, 1000);
            break;
                      
                case 6:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 0;
              setTimeout(resetAnimation, 1000);
            break;
                      
         /*       case 7:
              element.classList.add('flip');
              element.textContent = word[wordIndex];
              wordIndex = 0;
              setTimeout(resetAnimation, 1000);
            break;  */
          }
      },2000)
}());



// dark mode toggle 

let toggle = document.body.querySelector('.fas');
let icons = document.body.querySelectorAll('.icons-social a');
let main = document.body.querySelector('main');
let wrapper = document.body.querySelector('.wrapper');
let whiteColor = '#FAFAFA';
let blackColor = '#000';

toggle.addEventListener('click', () => {
  if(toggle.classList.contains('fa-sun')) {
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');

    toggle.style.color = blackColor;
    document.body.style.backgroundColor = whiteColor;
    main.style.color = blackColor;
    wrapper.style.color = blackColor;

    icons.forEach(icon => {
      icon.style.color = blackColor;
    })

  } else if (toggle.classList.contains('fa-moon')) {
    toggle.classList.remove('fa-moon');
    toggle.classList.add('fa-sun');

    toggle.style.color = whiteColor;
    document.body.style.backgroundColor = blackColor;
    main.style.color = whiteColor;
    wrapper.style.color = whiteColor;

    icons.forEach(icon => {
      icon.style.color = whiteColor;
    })
  }
  else return;
})
