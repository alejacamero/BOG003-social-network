import { views } from '../controllers/index.js';

let content = document.getElementById('root');

const router = async (route) => {
    content.innerHTML = "";
    
    if (route) {
        switch (true) {
            case route === '':
                return content.appendChild(views.Home());

            case route === '#/':
                return content.appendChild(await views.Home());

            case route === '#/login':
                return content.appendChild(views.Login());

            case route === '#/register':
                return content.appendChild(views.Register());

            case route.includes('#/post'):
                return content.appendChild(await views.Post());

            default:
        }
     }
};

export { router };