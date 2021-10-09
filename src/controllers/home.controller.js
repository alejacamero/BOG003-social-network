import { homeView } from '../views/home.js';
import { addLike, deletePost } from '../views/home.js';

export const Home = async () => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = await homeView();
    domHandler(divElement);
    return divElement;
};

const domHandler = (divElement) => {
    divElement.addEventListener('click', (event) => {
        if (event.target && event.target.id === `like`) {
            const targetElement = event.target || event.srcElement;
            addLike(targetElement.dataset.id, localStorage.getItem("displayName"));
        } else if (event.target && event.target.id === `delete`) {
            const targetElement = event.target || event.srcElement;
            deletePost(targetElement.dataset.id);
        } else if (event.target && event.target.id === `edit`) {
            const targetElement = event.target || event.srcElement;
            window.location.hash = `#/post/?post=${targetElement.dataset.id}`;
        }
        

    })

}