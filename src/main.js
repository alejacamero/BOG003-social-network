// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routes.js';
import { signOut } from './views/home.js';

router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

firebase.firestore().collection("posts")
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      router(window.location.hash);
    });
  });


document.addEventListener('click', (event) => {
  if (event.target && event.target.id === `logout`) {
    signOut();
    window.location.hash = '#/login'; 
  } else if (event.target && event.target.id === `home`) {
    window.location.hash = '#/';
  }
});