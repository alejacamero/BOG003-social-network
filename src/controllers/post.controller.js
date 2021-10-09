import { postView } from '../views/post.js';
import { createPost, editPost } from '../views/post.js';

export const Post = (idParam) => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = postView;
    domHandler(divElement, idParam);
    return divElement;
};

const domHandler = (divElement, idParam) => {
    const post = divElement.querySelector('#post-form');

    if (post) {
        post.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputPost = divElement.querySelector('#input-post');

            if (localStorage.getItem("displayName") && localStorage.getItem("email")) {
                if (idParam) {
                    editPost(idParam, inputPost.value)
                        .then((res) => {
                            inputPost.value = "";
                            window.location.hash = '#/';
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                } else {
                    createPost(inputPost.value, localStorage.getItem("displayName"), localStorage.getItem("email"))
                        .then((res) => {
                            inputPost.value = "";
                            window.location.hash = '#/';
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            }
        }
        );
    }
}