# Social Network 
# 4PETS
![](https://i.imgur.com/W31jxlH.png)

Realizado por: Natalia Fajardo, Xiomara Cardenas,  Alejandra Camero

---
---
## Resumen del proyecto

4Pets es una red social inspirada en Facebook en la que los amantes de las mascotas encontrarán un espacio donde expresar sus pensamientos y vivencias más divertidas con sus peluditos, en 4Pets las mascotas tienen el control de la diversión, crea el perfil  de tu mascota y realiza publicaciones de esas aventuras que el mundo no se puede perder, interactúa con otros usuarios y deja que la creatividad hable por sí sola.

---
---

## Investigación UX

Realizamos una encuesta para conocer los principales intereses de nuestros usuarios, el tipo de paleta de colores que les gustaría en la aplicación, el nombre a elección y servicios.

En ella participaron más de 76 personas que nos dieron una visión clara de lo que debíamos implementar 

![](https://i.imgur.com/9Denlyu.png)
![](https://i.imgur.com/32SYkuZ.png)
![](https://i.imgur.com/Xh3QUX0.png)

---




### Resultados

![](https://i.imgur.com/JMAUtKh.png)
![](https://i.imgur.com/PgeyAXr.png)



![](https://i.imgur.com/lrxjbW4.png)

![](https://i.imgur.com/c0vUE74.png)






---
---

## Historias de usuario

Se realizaron 4 historias de usuario que cumplen con los objetivos de aprendizaje del proyecto y las expectativas de nuestros usuarios.

---

### Historia de usuario 1: Registro

Yo como amante de las mascotas quiero poder registrarme en la red social de manera fácil y rápida.  Para poder interactuar con otros usuarios, igualmente interesados en diversos temas que tienen que ver con las mascotas.

### Criterios de aceptación:

1. El registro debe poder hacerse fácilmente desde cualquier dispositivo.
2. Al ingresar a la red social el usuario encontrará un formulario donde podrá logearse para iniciar sesión o en caso de que no esté registrado, registrarse para hacer el ingreso por primera vez a la red social.
3. Si el usuario decide registrarse directamente (no entra con Google), deberá hacer clic sobre la frase "REGISTRATE AQUÍ" del formulario, e inmediatamente será conducido y/o redirigido a otro formulario donde deberá ingresar usuario, correo electrónico válido, clave y confirmación de clave, y luego hacer clic sobre el botón "Regístrate". Posterior a esto recibirá un correo de confirmación en el que debe hacer clic; con el propósito de verificar si efectivamente la cuenta de correo que proporcionó es válida.

### Definición de terminado:

* Debe ser una SPA.
* El código cumple con la guía de estilos acordada.
* Se asegura que no hayan usuarios repetidos, impidiendo que estos puedan registrarse más de una vez con una misma cuenta.
* Solo se permite el registro con un correo electrónico válido.
* Lo que se escriba en el campo (input) de contraseña debe ser secreto.
* Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
* Al enviarse el formulario de registro debe validarse.
* Debe ser responsive para desktop, tablet y mobile.
* Se ha recibido code-review de al menos una compañera de otro equipo.
* Se ha hecho pair-programming mínimo una hora al día.
* El código tiene, y pasa, los tests unitarios necesarios.
* Se testeó manualmente buscando errores e imperfecciones simples.
* Se hicieron pruebas de usabilidad y se incorporó el feedback de los usuarios como mejoras.
* El código está en el repositorio, más específicamente en la rama master.
* Se desplegó aplicación y se etiquetó la versión (git tag).




### Historia de usuario 2: Inicio de sesión

Yo como amante de las mascotas quiero poder logearme en la red social con mi correo o cuenta de google para poder ingresar sin problemas cada vez que quiera y/o necesite hacerlo.


### Criterios de aceptación:

1. El ingreso debe poder hacerse fácilmente desde cualquier dispositivo.
2. Al entrar a la red social el usuario encontrará un formulario donde podrá logearse para iniciar sesión, ingresando usuario y clave, y luego deberá dar clic sobre el botón "Ingresar".
3. El usuario podrá ingresar usando su correo electronico, o en caso de no haberse registrado directamente, podrá ingresar con Google.


### Definición de terminado:

* Debe ser una SPA.
* El código cumple con la guía de estilos acordada.
* Solamente se permite el acceso a usuarios con cuentas válidas.
* Lo que se escriba en el campo (input) de contraseña debe ser secreto.
* Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
* Al enviarse el formulario de inicio de sesión, debe validarse.
* Debe ser responsive para desktop, tablet y mobile.
* Se ha recibido code-review de al menos una compañera de otro equipo.
* Se ha hecho pair-programming mínimo una hora al día.
* El código tiene, y pasa, los tests unitarios necesarios.
* Se testeó manualmente buscando errores e imperfecciones simples.
* Se hicieron pruebas de usabilidad y se incorporó el feedback de los usuarios como mejoras.
* El código está en el repositorio, más específicamente en la rama master.
* Se desplegó aplicación y se etiquetó la versión (git tag).

### Historia de usuario 3: Publicación

Yo como amante de las mascotas quiero publicar contenido de mi interés para interactuar en la red social.


### Criterios de aceptación:

1. Se podrá interactuar fácilmente desde cualquier dispositivo.
2. Al hacerse efectiva la validación, el usuario encontrará en la parte superior de la pantalla un menú de navegación, donde visualizará tres iconos (home, perfil y notificaciones).
3. A continuación el usuario ubicará una sección o muro con las publicaciones, contenidos y anuncios del más reciente al más antiguo.
4. El usuario tendrá tres opciones con respecto a las publicaciones; darle like, comentar y compartir el contenido.

### Definición de terminado:

* Debe ser una SPA.
* El código cumple con la guía de estilos acordada.
* Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido (solamente se permite la interacción de usuarios con cuentas válidas).
* Se debe poder dar y quitar like a una publicación. Máximo uno por usuario.
* Llevar un conteo de los likes.
* Debe ser responsive para desktop, tablet y mobile.
* Se ha recibido code-review de al menos una compañera de otro equipo.
* Se ha hecho pair-programming mínimo una hora al día.
* El código tiene, y pasa, los tests unitarios necesarios.
* Se testeó manualmente buscando errores e imperfecciones simples.
* Se hicieron pruebas de usabilidad y se incorporó el feedback de los usuarios como mejoras.
* El código está en el repositorio, más específicamente en la rama master.
* Se desplegó aplicación y se etiquetó la versión (git tag).


### Historia de usuario 4: Home- Muro publicaciones

Yo como amante de las mascotas quiero ver, compartir, comentar y dar like para poder interactuar en la red social.

### Criterios de aceptación:

1. Se podrá interactuar fácilmente desde cualquier dispositivo.
2. Al hacerse efectiva la validación, el usuario encontrará en la parte superior de la pantalla un menú de navegación, donde visualizará tres iconos (home, perfil y notificaciones).
3. A continuación el usuario ubicará una sección o muro con las publicaciones, contenidos y anuncios del más reciente al más antiguo.
4. El usuario tendrá tres opciones con respecto a las publicaciones; darle like, comentar y compartir el contenido.

### Definición de terminado:

* Debe ser una SPA.
* El código cumple con la guía de estilos acordada.
* Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido (solamente se permite la interacción de usuarios con cuentas válidas).
* Se debe poder dar y quitar like a una publicación. Máximo uno por usuario.
* Llevar un conteo de los likes.
* Debe ser responsive para desktop, tablet y mobile.
* El código tiene, y pasa, los tests unitarios necesarios.
* Se testeó manualmente buscando errores e imperfecciones simples.
* Se hicieron pruebas de usabilidad y se incorporó el feedback de los usuarios como mejoras.
* El código está en el repositorio, más específicamente en la rama master.
* Se desplegó aplicación y se etiquetó la versión (git tag).

---
---

## Prototipos de Baja fidelidad

![](https://i.imgur.com/y4RKaHu.png)


## Prototipo alta fidelidad

Figma fue la  herramienta de diseño visual utilizada para realizar el prototipo Mobile First de alta fidelidad en donde seguimos los fundamentos de visual design

![](https://i.imgur.com/VLpCqfP.png)

![](https://i.imgur.com/yeisbDG.png)
---
---

## Test de usabilidad

Al mostrar la aplicación o interfaz a los usuarios solicitaron los siguientes cambios al prototipo inicial :+1: 


1. Se elimino la parte en la que se visualizan tres secciones en el footer (Alimentos , tips y centros vacacionales) ya que confundia un poco al usuario.
 
2. Teniendo en cuenta que es una red social de mascotas el icono del like inicial fue cambiado por una garrita que representa a los  animales en general con un corazón en el centro, un cambio de icono fue la decisión  general.


Realizamos los cambios solicitados por los usuarios para mejorar su experiencia.


---
---
