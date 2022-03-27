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

const signupUser = document.getElementById('signup-user');
const signupPassword = document.getElementById('signup-pass');
const signupEmail = document.getElementById('signup-email');
const signupSubmit = document.getElementById('signup-submit');

signupSubmit.addEventListener('click', () => {
  const userData = {
    username: signupUser.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };

  fetch('/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        window.location.href = '/';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
