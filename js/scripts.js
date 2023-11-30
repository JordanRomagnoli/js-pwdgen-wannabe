const userName = prompt("Qual è il tuo nome ?");
const userSurname = prompt("Qual è il tuo cognome ?");
const userFavoriteColor = prompt("Qual è il tuo colore preferito ?");
let classNumber = 114;


console.log(
    ` Il nome dell'utente è : ${userName}`
);

console.log(
    ` Il cognome dell'utente è : ${userSurname}`
);

console.log(
    ` Il colore preferito dell'utente è : ${userFavoriteColor}`
);

document.getElementById('userPass').innerHTML = `${userName}${userSurname}${userFavoriteColor}${classNumber}`;