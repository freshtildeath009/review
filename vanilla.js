const img = document.querySelector('.person-img');
const author = document.querySelector('.name');
const job = document.querySelector('.skill');
const info = document.querySelector('.comment');

const prevBtn = document.querySelector('.prev-btn');
const nxtBtn = document.querySelector('.nxt-btn');

// Set starting item
let currentItem = 0;

// Show next persom
nxtBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem)
})
// Show prev person
prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem)
})

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

