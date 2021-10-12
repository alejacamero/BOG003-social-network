import { header } from '../components/header.js';

const isUser = localStorage.getItem("displayName");

if (!isUser) {
  window.location.hash = '#/login'; 
}

export const createPost = (texto, username, email) => {
  return firebase.firestore().collection("posts").add({ texto, username, email });
}

export const editPost = (id, texto) => {
  const postRef = firebase.firestore().collection("posts").doc(id);
  return postRef.update({ texto });
}

export const getPostText = (id) => {
  const docRef = firebase.firestore().collection("posts").doc(id);
  return docRef.get();
}

export const postView = async () => {
  let idTexto = "";
  const match = window.location.hash.match(/id=([^&]*)/);
  let title = "Crea tu publicación";
  if (match && match[1]) {
    await getPostText(match[1])
      .then((doc) => {
        idTexto = doc.data().texto;
        title = "Editar tu publicación";
      })
  }

  return `
    ${header}
    <section class="postSection">
      <div class="prePost">
        <h1 class="postMessage">${title}</h1>
        <div>
          <p>¡¡No olvides los mejores momentos al lado de tu humano!!</p>
        </div>
      </div>
      <div class="postForm">
        <form id="post-form">
          <textarea id="input-post" name="textarea" rows="10" cols="50" placeholder="¿Qué quieres publicar hoy?">${idTexto}</textarea>
          <div class="buttonPost">
            <button class="button-Post type="submit">Publicar</button>
            <button id="btnCancel" class="button-Post type="submit">Cancelar</button>
          </div>
        </form>
      </div>
    </section>
`};
