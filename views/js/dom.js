/* eslint-disable no-undef */
const logInModal = document.getElementById('logInModal');

const logIn = document.getElementById('logIn');

const span = document.getElementsByClassName('close')[0];

logIn.addEventListener('click', () => {
  logInModal.style.display = 'block';
});

span.onclick = () => {
  logInModal.style.display = 'none';
};

const signUpModal = document.getElementById('signUpModal');

const signUp = document.getElementById('signUp');

const span2 = document.getElementsByClassName('close')[1];

signUp.addEventListener('click', () => {
  signUpModal.style.display = 'block';
});

span2.onclick = () => {
  signUpModal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === signUpModal) {
    signUpModal.style.display = 'none';
  }
  if (event.target === logInModal) {
    logInModal.style.display = 'none';
  }
};
