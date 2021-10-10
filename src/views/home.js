export const signOut = () => {
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
<header class="header">
    <div class="menu">
        <div class="logo">
            <img src="../img/logotipofinal-home.png" alt="Logotipo">
        </div>
    </div>
</header>
<div>
    <nav class="nav">
        <a href="#"><img src="../img/home-muro.png" alt="home"></a>
        <a href="#"><img src="../img/paw-home.png" alt="perfil"></a>
        <button class="buttonLogOut" id="logout">
            <img src="../img/logout-home.png" alt="logout">
        </button>                
    </nav>
</div>
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
                    <button id="like" data-id="${doc.id}"><img src="../img/Likes-muro.png" alt="like">  Me gusta</button>
                </div>
                <a href="#"><img src="../img/comment.png" alt="comment">  Comentar</a>
                <button id="edit" data-id="${doc.id}"><img src="../img/pencil.png" alt="pencil">  Editar</button> 
                <button id="delete" data-id="${doc.id}"><img src="../img/garbage.png" alt="garbage">  Eliminar</button> 
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
