

var commentBtn = document.querySelector('.comment a');


var modal = document.getElementById('modal');


var closeBtn = document.querySelector('.close');


commentBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});


closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; 
});


window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

var commentBtn = document.querySelector('.comment a');


commentBtn.addEventListener('mouseover', function() {
  commentBtn.classList.remove('pulsate'); 
});


commentBtn.addEventListener('mouseout', function() {
  commentBtn.classList.add('pulsate'); 
});



var commentBtn = document.querySelector('.comment a');


commentBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
});