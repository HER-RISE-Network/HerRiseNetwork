let slideIndex=0;
let typingInterval,deletingInterval;
const slides=document.getElementsByClassName("slide");

window.onload=()=>{showSlide(slideIndex);};

function showSlide(index){

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

if(index>=slides.length)slideIndex=0;
if(index<0)slideIndex=slides.length-1;

slides[slideIndex].style.display="block";

const h2=slides[slideIndex].querySelector("h2");

if(h2)startTypingCycle(h2);

}

function plusSlides(n){
clearInterval(typingInterval);
clearInterval(deletingInterval);
slideIndex+=n;
showSlide(slideIndex);
}


function startTypingCycle(element){

const fullText=element.dataset.text;

element.textContent="";

let charIndex=0;

typingInterval=setInterval(()=>{

element.textContent+=fullText[charIndex];

charIndex++;

if(charIndex===fullText.length){

clearInterval(typingInterval);

setTimeout(()=>deleteHeading(element,fullText),2000);

}

},80);

}

function deleteHeading(element,text){

let charIndex=text.length;

deletingInterval=setInterval(()=>{

element.textContent=text.substring(0,charIndex);

charIndex--;

if(charIndex<0){

clearInterval(deletingInterval);

slideIndex++;

if(slideIndex>=slides.length)slideIndex=0;

showSlide(slideIndex);

}

},50);

}


/* TIMELINE REVEAL */

const timelineItems=document.querySelectorAll('.timeline-item');

function revealTimeline(){

const triggerPoint=window.innerHeight*0.8;

timelineItems.forEach(item=>{

const itemTop=item.getBoundingClientRect().top;

if(itemTop<triggerPoint){

item.classList.add('visible');

}

});

}

window.addEventListener('scroll',revealTimeline);


/* ABOUT HEADING */

const aboutHeading=document.querySelector('.about-heading');

function revealHeading(){

const triggerPoint=window.innerHeight*0.8;

const top=aboutHeading.getBoundingClientRect().top;

if(top<triggerPoint){

aboutHeading.classList.add('visible');

}

}

window.addEventListener('scroll',revealHeading);


/* SMOOTH SCROLL */

document.querySelectorAll('.links-box a').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

const id=link.getAttribute('href');

const target=document.querySelector(id);

target.scrollIntoView({behavior:"smooth"});

});

});
const form = document.getElementById('contact-form');
const notif = document.getElementById('form-notification');

function showNotification(message, type='success') {
  notif.textContent = message;
  notif.className = 'form-notification show ' + (type === 'success' ? 'success' : 'error');

  setTimeout(() => {
    notif.classList.remove('show');
    notif.classList.remove('success', 'error');
  }, 4000);
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showNotification('✅ Message sent successfully!', 'success');
      form.reset();
    } else {
      showNotification('⚠️ Failed to send. Try again later.', 'error');
    }
  } catch (error) {
    console.error('Form Submission Error:', error);
    showNotification('⚠️ Something went wrong.', 'error');
  }
});



const mvCards = document.querySelectorAll('.mv-card');

mvCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove 'active' from all cards
    mvCards.forEach(c => c.classList.remove('active'));
    
    // Add 'active' to clicked card
    card.classList.add('active');
  });
});





