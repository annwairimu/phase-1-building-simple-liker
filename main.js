// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');

const emptyHeart = document.querySelector('.like-glyph');
emptyHeart.addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      const fullHeart = emptyHeart.querySelector('.like-glyph-icon');
      fullHeart.textContent = FULL_HEART;
      emptyHeart.classList.add('activated-heart');
      emptyHeart.classList.remove('like-glyph');
    })
    .catch(function(error) {
      const errorMessage = errorModal.querySelector('#modal-message');
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');
      setTimeout(function() {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

const fullHeart = document.querySelector('.activated-heart');
fullHeart.addEventListener('click', function() {
  fullHeart.textContent = EMPTY_HEART;
  emptyHeart.classList.add('like-glyph');
  emptyHeart.classList.remove('activated-heart');
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
