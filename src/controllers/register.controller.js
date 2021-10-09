import { registerView } from '../views/register.js';
import { registerUser, emailVerification } from '../views/register.js';

export const Register = () => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = registerView;
    domHandler(divElement);
    return divElement;
};

const domHandler = (divElement) => {
    const enviar = divElement.querySelector('#register');

    if (enviar) {
        enviar.addEventListener('submit', async (e) => {
            e.preventDefault();
            let userName = divElement.querySelector('#user-name');
            let email = divElement.querySelector('#email');
            let password = divElement.querySelector('#password');
            let confirmPassword = divElement.querySelector('#confirm-password');
            const registerError = divElement.querySelector('#register-error');

            try {
                registerUser(email.value, password.value, confirmPassword.value)
                    .then(async (userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        const username = userName.value;
                        await user.updateProfile({
                            displayName: username,
                        })

                        email.value = "";
                        password.value = "";
                        userName.value = "";
                        confirmPassword.value = "";

                        const loginRoute = `${window.location.origin}/#/login`;
                        emailVerification();
                        window.location.replace(loginRoute);

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);

                        switch (errorCode) {
                            case 'auth/email-already-in-use':
                                registerError.classList.add('error');
                                registerError.innerHTML = 'Esta cuenta ya existe!';
                                break;
                            case 'auth/invalid-email':
                                registerError.classList.add('error');
                                registerError.innerHTML = 'Correo electrónico no válido!';
                                break;
                            case 'auth/weak-password':
                                registerError.classList.add('error');
                                registerError.innerHTML = 'La contraseña debe tener minimo 6 caracteres!';
                                break;

                            case 'passwords/no-match':
                                registerError.classList.add('error');
                                registerError.innerHTML = 'Las contraseñas no coinciden!';
                                break;


                            default:
                                break;
                        }


                        email.value = "";
                        password.value = "";
                        userName.value = "";
                        confirmPassword.value = "";

                    });
            } catch (error) {
                console.log(error);
                switch (error.code) {

                    case 'passwords/no-match':
                        registerError.classList.add('error');
                        registerError.innerHTML = 'Las contraseñas no coinciden!';

                        email.value = "";
                        password.value = "";
                        userName.value = "";
                        confirmPassword.value = "";

                        break;
                    default:
                        break;

                }
            }
        });
    }
}



