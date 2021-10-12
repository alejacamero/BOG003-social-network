import { header } from '../components/header.js';

export const signOut = () => {
    localStorage.removeItem("displayName");
    localStorage.removeItem("email");
    return firebase.auth().signOut();
}

export const addLike = async (id, username) => {
    const postRef = await firebase.firestore().collection("posts").doc(id);
    const currentDoc = await postRef.get();
    console.log(currentDoc.data());
    if (currentDoc.data() && currentDoc.data().likes && currentDoc.data().likes.includes(username)) {
        return postRef.update({ likes: firebase.firestore.FieldValue.arrayRemove(username) });
    } else {
        return postRef.update({ likes: firebase.firestore.FieldValue.arrayUnion(username) });
    }
}

export const deletePost = (id) => {
    return firebase.firestore().collection("posts").doc(id).delete();
}



export const createHome = (posts) => `
${header}
<div class="muroHome">
    <img class="userProfile" src="../img/usuariogato-home.png" alt="usuarioPrincipal">
    <form>
    <a href="#/post">
        <input class="inputHomeOne" type="text" placeholder="¿Qué quieres publicar hoy?">
    </a>
    </form>
</div>
<section publicacionesHome>${posts}</section>
<footer class="footer">
</footer>
`;

const createHtmlPost = (doc) => {
    let likes = "";
    let hide = "hide";
    if (doc.data().likes && doc.data().likes.length > 0) {
        likes = doc.data().likes.length;
        hide = "";
    }
    return `
        <div class="postMuroOne">
                <div>
                    <img class="UsuarioUno" src="../img/profile-dog-home.png" alt="usuarioamigoperro">
                </div>
                <div>
                    <h3>${doc.data().username}</h3>
                    <img class="publico" src="../img/globo1.png" alt="publico">
                    <div>
                        <p>${doc.data().texto}</p>
                    </div>
                </div>
            </div>
                <div class="postMuroTwo">
                    <p>El amor es una palabra de cuatro patas</p>
                    <img class="fotoPublicacion" src="../img/post-home.png" alt="fotoPublicacion">
                </div>
            <div class="takePart">
                <div class="like-part">
                    <div class="like-counter ${hide}"><span>${likes.toString()}</span></div>
                    <button id="like" class="post-button" data-id="${doc.id}"><img src="../img/Likes-muro.png" alt="like">  Me gusta</button>
                </div>
                <button class="post-button"><img src="../img/comment.png" alt="comment">  Comentar</button>
                <button id="edit" class="post-button" data-id="${doc.id}"><img src="../img/pencil.png" alt="pencil">  Editar</button> 
                <button id="delete" class="post-button" data-id="${doc.id}"><img src="../img/garbage.png" alt="garbage">  Eliminar</button> 
            </div>`;

}

export const homeView = async () => {
    let home = "";
    let posts = "";

    await firebase.firestore().collection("posts").get().then(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            posts += createHtmlPost(doc);
        });
        home = await createHome(posts);
    });
    return home;
}
