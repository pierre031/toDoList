//Gestion des évènements sur la TO-DO List

//Gestion de la validité du textarea
//Récupération du champ
const todo = document.getElementById("todo");
//Récupération du bouton Ajouter
const submit = document.querySelector("input[type='button']");
//Récupération du bloc todolist
const todolist = document.getElementById("todolist");

//Ajout d'un événement lorsqu'on quitte le focus de la saisie
todo.addEventListener("blur", checkToDo);
//Ajout d'un évènement lors du click sur le bouton ajouter
submit.addEventListener("click", checkForm);

function checkToDo() {
  let isToDoOk = true;

  //Si le champ est vide, message d'erreur
  if (todo.value.trim() === "") {
    isToDoOk = false;
  }
  //Suppression des espaces en début et fin de saisie
  //Test sur la saisie
  //Minimum 5 caractères
  if (todo.value.trim().length < 5 && todo.value.trim().length > 0) {
    isToDoOk = false;
    //Ajout d'une info-bulle lorsque la souris est sur l'input
    todo.setAttribute(
      "title",
      "Vous n'avez rien à dire ? (5 caractères minimum)"
    );
    //Ajout de bordure rouge
    todo.classList.add("bordererror");
    //Ajout d'un message d'erreur
    todo.nextElementSibling.classList.add("show");
  } else {
    todo.classList.remove("bordererror");
    todo.nextElementSibling.classList.remove("show");
  }
  return isToDoOk;
}

function checkForm(evt) {
  //Test du champ de saisie
  let toDoChecked = checkToDo();

  //Si le champ est invalide
  //Pop-up pour prévenir et le formulaire ne s'envoit pas
  if (!toDoChecked) {
    alert("Formulaire invalide !");
    evt.preventDefault();
  } else {
    //Si le champ est valide
    //On l'ajoute à la To-Do List
    addToDo();
  }
}

function addToDo() {
  //Récupération de la saisie utilisateur et suppression des espaces
  let toDoInput = todo.value.trim();

  //Création des différents éléments pour la mise en page
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  let p = document.createElement("p");
  let valider = document.createElement("input");
  let supprimer = document.createElement("input");

  //Création de l'arborescence dans le DOM
  todolist.prepend(div);
  div.appendChild(p);
  div.appendChild(div2);
  div2.appendChild(valider);
  div2.appendChild(supprimer);

  //Ajout des attributs des boutons
  valider.setAttribute("type", "submit");
  valider.setAttribute("id", "done");
  valider.setAttribute("value", "Valider");
  supprimer.setAttribute("type", "reset");
  supprimer.setAttribute("id", "reset");
  supprimer.setAttribute("value", "Supprimer");

  //Ajout du texte saisie par l'utilisateur
  p.textContent = toDoInput;
  //Récupération du bouton Valider
  const done = document.getElementById("done");
  //Récupération du bonton Supprimer
  const remove = document.getElementById("reset");

  //Ajout d'un évènement lors du click sur le bouton Valider
  done.addEventListener("click", checkDone);
  //Ajout d'un évènement lors du click sur le bouton supprimer
  remove.addEventListener("click", removeToDo);

  function checkDone() {
    //Récupération du parent de 2° niveau (la div de la To-Do)
    let toDone = done.parentNode.parentNode;
    //Ajout de la classe .done pour ajouter la couleur de fond verte
    toDone.classList.add("done");
  }

  function removeToDo() {
    //Récupération du parent de 2° niveau (la div de la To-Do)
    let toRemove = remove.parentNode.parentNode;
    //Suppression de la div To-Do
    toRemove.remove();
  }
}
