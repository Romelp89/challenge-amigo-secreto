<hi> Challenge Amigo Secreto </hi>

Descripción del proyecto.

Este proyecto tiene como objetivo desarrollar la implementación de la funcionalidad de una página web. En la que se ingresarán los nombres de sus amigos y se sortarán para obtener a su amigo secreto. La página web requerirá que en la caja de texto ingrese el nombre de sus amigos mientras se enlistarán automáticamente debajo de esta caja de texto, una vez ingresados ​​los nombres de sus amigos deseados deberán dar clic en el botón "sortear", el cual sorteara el nombre de un amigo, y lo mostrará en pantalla.

¿Cómo funciona el código?

Ulitizando javascriptcomo el lenguaje para el desarrollo de la funcionalidad, se han desarrollado 3 funciones principales. La primera función agregará el nombre escrito en la caja de texto a un array en donde se guardarán los nombres de los amigos ingresados, la función se ejecuta al dar clic en el botón "Añadir". La segunda función permite actualizar la lista de amigos cada vez que se ingresa un nuevo nombre, mostrará los nombres de los amigos en forma de lista debajo de la caja de texto. La tercera función permite hacer el sorteo de los nombres de los amigos ingresados, y posteriormente limpiará la lista desplegada de los amigos y mostrará únicamente el amigo sorteado.

Se declaran las variables nameFrienden donde se alojará el nombre ingresado en la caja de texto, friendsListun array en donde se guardarán los nombres ingresados ​​y showedListla cuál selecciona la lista que se mostrará debajo de la caja de texto.

let nameFriend = "";

const friendsList = [];

const showedList = document.getElementById('listaAmigos'); 

En la funciónaddFriend

1 A la variable nameFriendse le asigna el valor que contiene la caja de texto.

2 Se evalúa si la caja de texto se encuentra vacía, de ser así se manda una alerta al usuario.

3 En caso de encontrar un valor, limpie la caja de texto y evalúe si el nombre existe en el array friendsList.

4 Si el nombre ingresado existe dentro del array se envía una alerta al usuario.

5 De no existir dentro del array agrega el nombre a la lista showedListcon un elemento // < li > //.

function addFriend(){

    nameFriend = document.getElementById('amigo').value;
    
    if (nameFriend === ''){
    
       alert("Por favor ingresa un nombre");
       
    } else {
    
       cleanInputBox();
       
       if(friendsList.includes(nameFriend)){
       
          alert("Atencion! Ya has ingresado este nombre");
          
       }  else {
       
          friendsList.push(nameFriend);
          
       }
       
    }
    
    return;
    
 }

 En la funciónuptadeFriendsList

1 Se limpia la lista showedListpara evitar duplicaciones.
2 Con un bucle forse itera hasta el número total de nombres ingresados.
3 Dentro del bucle de declara la constante friendcuál creará un nuevo elemento // < li > //.
4 A la variable friendse le asigna el tamplate string con el índice iterado del array friendsList.
5 Se agrega el elemento // < li > // a la lista showedList.

function updateFriendsList() {

    showedList.innerHTML = "";
    
    for (let i = 0; i < friendsList.length; i++){
    
       const friend = document.createElement('li');
       
       friend.innerHTML = `${friendsList[i]}`;
       
       showedList.appendChild(friend);
       
    }
    
    return;
    
 }

 En la funciónraffleSecretFriend

1 Se evalúa si el array se encuentra vacío.

2 De encontrarse vacio se emite una alerta al usuario.

3 De contener los nombres de sus amigos:

4 Se declara la constante showedSecretFrienden donde se selecciona la lista en donde se muestra el resultado.

5 Se declara la variable indexFriendy se le asiga el numero pseudoaleatorio generado.

6 Se declara la variable secretFrienden donde se crea un nuevo elemento <li>.

7 A la variable secretFriendse le asigna la cadena de plantilla con el valor del elemento dentro del array friendListque tiene como índice en número generado en la variable indexFriend.

8 A la lista showedSecretFriendse le agrega el elemento <li>que muestra el resultado.

function raffleSecretFriend() {

    if (friendsList.length > 0){
    
       showedList.innerHTML = "";
       
       const showSecretFriend = document.getElementById('resultado');
       
       let indexFriend = Math.floor(Math.random()*friendsList.length);
       
       let secretFriend = document.createElement('li');
       
       secretFriend.innerHTML = `${friendsList[indexFriend]} es tu amigo secreto!`;
       
       showSecretFriend.appendChild(secretFriend);
       
    } else {
    
       alert("No hay amigos disponibles para sortear");
       
    }
    
 }

 En la funcióncleanInputBox

 Se asigna el valor ''a la caja de texto. De esta manera se limpia la caja.

 function cleanInputBox(){
 
    document.getElementById('amigo').value = '';
    
 }
 
