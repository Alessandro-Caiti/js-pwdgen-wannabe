var nome = prompt("Dimmi il tuo nome");
var cognome = prompt("Dimmi il tuo cognome");
var colore = prompt("E invece il tuo colore preferito?");
var data = new Date();
var anno = data.getFullYear();
document.getElementById('psw').innerHTML = nome + cognome + colore + anno;
// document.getElementById('psw').innerHTML = nome + cognome + colore + 20;
// document.getElementById('psw').innerHTML = nome + ";" + cognome + ";" + colore + ";" + 20;
