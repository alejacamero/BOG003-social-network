import { loginUser, loginGoogle } from '../views/login.js';
import { registerUser } from '../views/register.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
global.firebase = mocksdk;
mocksdk.auth().autoFlush();


describe('loginUser', () => {
    it('deberia permitir iniciar sesion con correo y contraseña', () => {
        loginUser('pepito@gmail.com', '12345678')
            .then((user) => {
                expect(user.email).toBe('pepito@gmail.com');
            });
    });
});

describe('loginGoogle', () => {
    it('deberia permitir iniciar sesion con google', () => {
        loginGoogle()
            .then((result) => {
                expect(typeof result).toBe('Object');
            });
    });
});

describe('registerUser', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof registerUser).toBe('function');
    });
  });

  