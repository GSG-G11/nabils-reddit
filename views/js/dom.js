/* eslint-disable camelcase */
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

const addPostModal = document.getElementById('add-post');

const postButton = document.querySelector('.fa-bullhorn');

const span3 = document.getElementsByClassName('close')[2];

postButton.addEventListener('click', () => {
  addPostModal.style.display = 'block';
});

span3.onclick = () => {
  addPostModal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === signUpModal) {
    signUpModal.style.display = 'none';
  }
  if (event.target === logInModal) {
    logInModal.style.display = 'none';
  }
  if (event.target === addPostModal) {
    addPostModal.style.display = 'none';
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
  console.log(userData);
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

const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-pass');
const loginSubmit = document.getElementById('login-submit');

loginSubmit.addEventListener('click', () => {
  const userData = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.status === 'success') {
        window.location.href = '/';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const logoutBtn = document.getElementById('logOut');
const greetingSpan = document.querySelector('.header-text span');
const userAnchor = document.querySelector('.header-text a');
const showLogout = (username) => {
  logoutBtn.style.display = 'inline-block';
  signUp.style.display = 'none';
  logIn.style.display = 'none';
  greetingSpan.style.display = 'inline-block';
  userAnchor.textContent = username;
  userAnchor.href = `/user/${username}`;
  document.querySelector('.fa-bullhorn').style.display = 'block';
};

logoutBtn.addEventListener('click', () => {
  fetch('/api/v1/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'success') {
        window.location.href = '/';
      }
    });
});

document.querySelector('#post-submit').addEventListener('click', () => {
  const postData = {
    title: document.querySelector('#post-title').value,
    body: document.querySelector('#post-body').value,
  };
  fetch('/add-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        // window.location.href = '/';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const parentPosts = document.querySelector('.posts-container');
const parsePostInDom = (postsArr) => {
  console.log(typeof postsArr);

  postsArr.forEach((post) => {
    fetch(`/username/${post.user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const domPost = `<div class="post">
        <div class="votes">
        <i class="fa-solid fa-chevron-up up-vote"></i><span>1</span
    ><i class="fa-solid fa-chevron-down down-vote"></i>
  </div>
  <div class="content-container">
    <div class="title">
    <p>${post.title}</p>
    </div>
    <div class="content">
     <p>${post.body}</p>
    </div>
    <div class="details">
    <span>by</span
    >&nbsp;<a href="/user/${post.user_id}" class="owner">${response.username}</a>&nbsp;<span>${(post.created_at).split('T')[1].slice(0, 5)}</span>
    </div>
  </div>
  </div>`;
        parentPosts.insertAdjacentHTML('afterbegin', domPost);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

window.onload = () => {
  fetch('/check-login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === 'success') {
        showLogout(response.username);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  fetch('/home', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === 'success') {
        parsePostInDom(response.rows);
        console.log(response.rows);
      }
    });
};
