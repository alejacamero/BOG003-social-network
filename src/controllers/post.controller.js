import { postView } from '../views/post.js';
import { createPost } from '../views/post.js';

export const Post = () => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = postView;
    domHandler(divElement);
    return divElement;
};

const domHandler = (divElement) => {
    const post = divElement.querySelector('#post-form');

    if (post) {
        post.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputPost = divElement.querySelector('#input-post');

            if (localStorage.getItem("displayName") && localStorage.getItem("email")) {

                createPost(inputPost.value, localStorage.getItem("displayName"), localStorage.getItem("email"))
                    .then((res) => {
                        console.log(res);
                        inputPost.value = "";
                        window.location.hash = '#/';
                    })
                    .catch((error) => {
                        console.log(error);

                    })
            }
        }
        );
    }
}