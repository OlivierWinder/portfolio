
// dropdown my socials dropdown after clicking on my socials menu link
const mySocialsLink = document.querySelector('.link-top')
const mySocialsDropdown = document.querySelector('.my-socials-dropdown')

// when click on mySocialsLink add class .show-my-socials-dropdown to mySocialsDropdown
mySocialsLink.addEventListener('click', function(){
 mySocialsDropdown.classList.toggle('show-my-socials-dropdown');
})


console.log(4)