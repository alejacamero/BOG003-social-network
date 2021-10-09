import { views } from '../controllers/index.js';

let content = document.getElementById('root');

const router = async (route) => {
content.innerHTML = "";
   switch(route) {
    case '': 
        return content.appendChild(views.Home());
     
    case '#/': 
        return content.appendChild(await views.Home());
     
    case '#/login':
        return content.appendChild(views.Login());

    case '#/register':
        return content.appendChild(views.Register());
    
    case '#/post':
        return content.appendChild(views.Post());
    default:
        
   }
};

export { router };