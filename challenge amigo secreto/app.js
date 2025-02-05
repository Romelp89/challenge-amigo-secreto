// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nameFriend = "";
const friendsList = [];
const showedList = document.getElementById('listaAmigos');

// Funcion para agregar amigos
function addFriend(){
   // Se obtiene el valor del input con el id: 'amigo', y se guarda en la variable addNameFriend
   nameFriend = document.getElementById('amigo').value;
   if (nameFriend === ''){
      alert("Por favor ingresa un nombre");
   } else {
      cleanInputBox();
      // Se evalua si el nombre ya existe en la lista de amigos
      if(friendsList.includes(nameFriend)){
         // En caso de existir el nombre se lanza alerta
         alert("Atencion! Ya has ingresado este nombre");
      }  else {
         // Caso contrario: se agrega a la lista
         friendsList.push(nameFriend);
      }
   }
   return;
}

// Funcion para actualizar la lista de amigos en el DOM
function updateFriendsList() {
   // Limpia la lista, para evitar valores dubplicados
   showedList.innerHTML = "";

   // Bucle para imprimir cada nombre registrado, agregando un elemento <li>
   for (let i = 0; i < friendsList.length; i++){
      const friend = document.createElement('li');
      friend.innerHTML = `${friendsList[i]}`;
      showedList.appendChild(friend);
   }
   return;
}

// Funcion para sortear al amigo secreto
function raffleSecretFriend() {
   if (friendsList.length > 0){
      // Limpia la lista que muestra los nombres agregados
      showedList.innerHTML = "";
      // Selecciona el elemento en donde se mostrara el resultado
      const showSecretFriend = document.getElementById('resultado');
      // Se genera un numero pseudo-aleatorio y se multiplica por la longitud de la lista de amigos
      let indexFriend = Math.floor(Math.random()*friendsList.length);
      // Crea el elemento <li> en donde se muestra el amigo sorteado
      let secretFriend = document.createElement('li');
      secretFriend.innerHTML = `${friendsList[indexFriend]} es tu amigo secreto!`;
      showSecretFriend.appendChild(secretFriend);
   } else {
      alert("No hay amigos disponibles para sortear");
   }
   
}

// Funcion para limpiar la caja de texto
function cleanInputBox(){
   document.getElementById('amigo').value = '';
}