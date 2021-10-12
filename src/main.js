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

const btnLogOut = document.querySelector('#logout');
if (btnLogOut) {

  btnLogOut.addEventListener('click', async () => {
    await signOut();
    window.location.hash = '#/login';
  });
};
