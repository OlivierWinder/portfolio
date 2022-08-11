const faders = document.querySelector('.fade-in');
const appearOptions = {}

const appearOnSroll = new IntersectionObserver
(function(
 entries, 
 appearOnSroll
 ) {
  entries.forEach(entry => {
   if(!entry.isIntersecting) {
    return;
   } else {
    entry.target.classList.add('appear');
    appearOnSroll.unobserve(entry.target);
   }
  })
}, 
appearOptions);

faders.forEach( fader => {
 appearOnSroll.observe(fader);
});


console.log(faders);