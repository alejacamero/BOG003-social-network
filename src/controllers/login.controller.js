import { loginView } from '../views/login.js';
import { loginUser, loginGoogle } from '../views/login.js';

export const Login = () => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = loginView;
    domHandler(divElement);
    return divElement;
};

const domHandler = (divElement) => {
    const login = divElement.querySelector('#login');

    if (login) {
        login.addEventListener('submit', async (e) => {
            e.preventDefault();
            let email = divElement.querySelector('#email-login');
            let password = divElement.querySelector('#password-login');
            const loginError = divElement.querySelector('#login-error');

            loginUser(email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const userLogin = userCredential.user;
                    console.log(userLogin);
                    if (userLogin) {
                        localStorage.setItem("displayName", userLogin.displayName);
                        localStorage.setItem("email", userLogin.email);
                    }

                    email.value = "";
                    password.value = "";
                    const homeRoute = `${window.location.origin}/#/`;
                    window.location.replace(homeRoute);
                })

                .catch((errorLogin) => {
                    const errorCodeLogin = errorLogin.code;
                    const errorMessageLogin = errorLogin.message;
                    console.log(errorCodeLogin, errorMessageLogin);

                    switch (errorCodeLogin) {
                        case 'auth/wrong-password':
                            loginError.classList.add('errorLogin');
                            loginError.innerHTML = 'La contraseña no es válida!';
                            break;

                        case 'auth/user-not-found':
                            loginError.classList.add('errorLogin');
                            loginError.innerHTML = 'El usuario no esta registrado!';
                            break;

                        case 'auth/invalid-email':
                            loginError.classList.add('errorLogin');
                            loginError.innerHTML = 'No corresponde a un correo electrónico!';
                            break;

                        default:
                            break;
                    }

                    email.value = "";
                    password.value = "";

                });
        });

        const btnGoogle = divElement.querySelector('#google');

        btnGoogle.addEventListener('click', async () => {
            await loginGoogle();
            window.location.hash = '#/';
        });

    };
}