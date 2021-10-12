import { views } from '../controllers/index.js';

let content = document.getElementById('root');

const router = async (route) => {
    
    content.innerHTML = "";

    if (route) {
        switch (true) {
            case route === '':
                window.location.hash = '#/';

            case route === '#/':
                return content.appendChild(await views.Home());

            case route === '#/login':
                return content.appendChild(views.Login());

            case route === '#/register':
                return content.appendChild(views.Register());

            case route.includes('#/post'):
                validateSession();
                return content.appendChild(await views.Post());

            default:
        }
    }
};


const validateSession = () => {
    const isUser = localStorage.getItem("displayName");

    if (!isUser) {
        window.location.hash = '#/login';
    }
}

export { router };