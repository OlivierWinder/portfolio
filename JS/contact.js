// define submit btn, close btn, section
const submitPopup = document.querySelector('.submit-popup')
const submitBtn = document.querySelector('.submit-btn')
const closeBtn = document.querySelector('.close-submit-popup')
// when click on submitBtn add class 'show-submit-popup'
submitBtn.addEventListener('click', function(e){
 submitPopup.classList.add('show-submit-popup');
 e.preventDefault();
})


// when click on closeBtn remove class 'show-submit-popup'
closeBtn.addEventListener('click', function(){
 submitPopup.classList.remove('show-submit-popup')
})
