import { postView } from '../views/post.js';
import { createPost, editPost } from '../views/post.js';

export const Post = async () => {
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = await postView();
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
                const idParam = window.location.hash.match(/id=([^&]*)/);
                if (idParam && idParam[1]) {
                    editPost(idParam[1], inputPost.value)
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