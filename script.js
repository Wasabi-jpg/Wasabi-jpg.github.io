// For main cards of my website
const cards = document.querySelectorAll(".card");
// println(cards);
console.log("Number of cards " + cards.length);
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry =>{
    entry.target.classList.toggle("visible", entry.isIntersecting);
    if(entry.isIntersecting){
      observer.unobserve(entry.target);
    }
  })
},{
  threshold : 0.5
});

cards.forEach(card =>{
  observer.observe(card);
});

// For project cards
const proj_cards = document.querySelectorAll(".pseudoBody");
// println(cards);
console.log("Number of cards " + proj_cards);
const proj_observer = new IntersectionObserver(proj_entries => {

  proj_entries.forEach(entry =>{
    entry.target.classList.toggle("visible", entry.isIntersecting);
    if(entry.isIntersecting){
      observer.unobserve(entry.target);
    }
  })
},{
  threshold : 0.5
});

proj_cards.forEach(card =>{
  observer.observe(card);
});

//For navigation bar purposes
function scrollToSection(id){
  const elem = document.getElementById(id);
  elem.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}