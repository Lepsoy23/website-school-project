"use strict"

//Elementi che cambiano per la navbar sticky
var n = document.getElementById("navbar");
var stk = document.getElementById("s");
var a = document.getElementById("a");

//Funzione che cambia la proprietà position della navbar
document.getElementById("s").onclick = function St_NoSt(e){
    e.preventDefault();

    if(n.style.position === "sticky"){

        n.style.position = "relative";
        stk.style.backgroundColor = "#152D2D";
        a.innerHTML = "Fisso";

    }else if(n.style.position === "relative"){

        n.style.position = "sticky";
        stk.style.backgroundColor = "#52BE80";
        a.innerHTML = "Attaccato";

    }
}

//Funzione utile per la navbar su dispositivi mobili
function navresp() {
var x = document.getElementById("navbar");
    if (x.className === "") {

        x.className += "resp";

    } else {

        x.className = "";

    }
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
/*function myFunction() {
    if (dropCont.style.display === "block") {
        dropCont.style.display = '';
    }else{
        dropCont.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        if (dropCont.style.display === "block") {
        dropCont.style.display = '';
        }
    }
}*/

//Array che rappresentano ogni chitarra presente
//0: nome chitarra, 1: prezzo

//Acustica
const om =
    {name: "Orchestra Model", price: 150.00}
;
const ga =
    {name: "Grand Auditorium", price: 150.00}
;
const ju =
    {name: "Jumbo", price: 200.00}
;
const dn =
    {name: "Dreadnought", price: 200.00}
;

//Classica
const c =
    {name: "Chitarra Classica", price: 100.00}
;
const c1 =
    {name: "Chitarra Classica <br /> per bambini", price: 100.00}
;
const c2 =
    {name: "Chitarra Classica <br /> custom", price: 100.00}
;
const c3 =
    {name: "Chitarra Classica <br /> Amplificabile", price: 200.00}
;

//Stratocaster
const sq =
    {name: "Squier Stratocaster", price: 499.00}
;
const fe =
    {name: "Fender Stratocaster", price: 999.00}
;
const ss =
    {name: "Signature Stratocaster", price: 1999.00}
;
const cs =
    {name: "Custom Stratocaster", price: 1999.00}
;

//Telecaster
const st =
    {name: "Squier Telecaster", price: 499.00}
;
const ft =
    {name: "Fender Telecaster", price: 999.00}
;
const vt =
    {name: "Signature Telecaster", price: 1999.00}
;
const ct =
    {name: "Custom Telecaster", price: 1999.00}
;

const chitarre = [
    om, ga, ju, dn,
    c, c1, c2, c3,
    sq, fe, ss, cs,
    st, ft, vt, ct
];

//Inizializzazione della chiavi delle chitarre
function setZero(){
    localStorage.setItem("om", "0");
    localStorage.setItem("ga", "0");
    localStorage.setItem("ju", "0");
    localStorage.setItem("dn", "0");

    localStorage.setItem("c", "0");
    localStorage.setItem("c1", "0");
    localStorage.setItem("c2", "0");
    localStorage.setItem("c3", "0");

    localStorage.setItem("sq", "0");
    localStorage.setItem("fe", "0");
    localStorage.setItem("ss", "0");
    localStorage.setItem("cs", "0");

    localStorage.setItem("st", "0");
    localStorage.setItem("ft", "0");
    localStorage.setItem("vt", "0");
    localStorage.setItem("ct", "0");
}

//Funzione per l'aggiunta di un prodotto
function add(_s){
    if (typeof(Storage) !== "undefined"){
        if (localStorage.clickcount){

            localStorage.clickcount = Number(localStorage.clickcount) + 1;

        } else{

            localStorage.clickcount = 1;

        }
        renderCart();

        var x = localStorage[_s];
        localStorage.setItem(_s, ++x);
    }
}

//Pulizia del carrello
function cl(){
    if (typeof(Storage) !== "undefined"){
        if (localStorage.clickcount){

            localStorage.clickcount = "0";

        }
        renderCart();
        setZero();
    }
}

//Visualizzazione nella pagina del carrello del singolo prodotto
function  renderProd(_s){
    var cht = document.getElementById(_s);
    var index = 0;
    var cht_p_tot = 0;

    if(localStorage.getItem(_s) === "0"){

        cht.style.display = "none";

    }else{

        index = indice(_s);

        cht.children[0].innerHTML = chitarre[index].name;

        var qnt = cht.children[1].children[0].innerHTML = localStorage.getItem(_s);
        var prz = cht.children[1].children[1].innerHTML = chitarre[index].price;
        cht_p_tot = cht.children[1].children[2].innerHTML = qnt * prz;

        cht.children[2].innerHTML = "Rimuovi una";
        cht.children[3].innerHTML = "Rimuovi tutte";

        cht.style.display = "block";

    }

    return cht_p_tot;
}

//Visualizzazione nella pagina del carrello di tutti i prodotti scelti
function renderProdTable(){
    var ptot = 0;

    for (let index = 0; index < localStorage.length; index++) {

        var chit = localStorage.key(index);
        var num = localStorage[chit];

        if(chit != "clickcount"){

            if(num != "0"){

                ptot += renderProd(chit);

            }else if(chit == "ga" && localStorage.clickcount === "0"){
                setEsempio();
            }else{
                document.getElementById("ga").style.display = "none";
            }

        }
    }

    document.getElementById("prz-cht-tot").innerHTML = ptot;
}

function indice(_s){

    var index = 0;

    switch(_s){

        //Acustiche

        case "om":{
            index = 0;
        }break;

        case "ga":{
            index = 1;
        }break;

        case "ju":{
            index = 2;
        }break;

        case "dn":{
            index = 3;
        }break;

        //Classiche

        case "c":{
            index = 4;
        }break;

        case "c1":{
            index = 5;
        }break;

        case "c2":{
            index = 6;
        }break;

        case "c3":{
            index = 7;
        }break;

        //Stratocaster

        case "sq":{
            index = 8;
        }break;

        case "fe":{
            index = 9;
        }break;

        case "ss":{
            index = 10;
        }break;

        case "cs":{
            index = 11;
        }break;

        //Telecaster

        case "st":{
            index = 12;
        }break;

        case "ft":{
            index = 13;
        }break;

        case "vt":{
            index = 14;
        }break;

        case "ct":{
            index = 15;
        }break;
    }

    return index;
}

//Visualizzazione nella pagina del carrello della scheda di esempio
function setEsempio(){
    var es = document.getElementById("ga");

    es.children[0].innerHTML = "Non hai aggiunto niente!";

    es.children[1].children[0].innerHTML = "Aggiungi";
    es.children[1].children[1].innerHTML = "almeno una";
    es.children[1].children[2].innerHTML = "chitarra";

    es.children[2].innerHTML = "Per farlo";
    es.children[3].innerHTML = "premi su una chitarra";

    es.style.display = "block";
}

//Visualizzazione in tutte le pagine dell'icona del carrello, con il numero di oggetti scelti
function renderCart(){
    if(localStorage.clickcount === "0"){

        contcarr.innerHTML = 0;
        svuotacarr.style.display = "none";

    }else{

        contcarr.innerHTML = localStorage.clickcount;
        svuotacarr.style.display = "block";

    }
}

//Pulizia del carrello e visualizzazione del'esempio nella pagina del carrello
function svuota(){

    if (localStorage.clickcount){

        localStorage.clickcount = "0";

    }
    setZero();
    //debugger;

    for (let index = 0; index < localStorage.length; index++) {
        var chit = localStorage.key(index);
        var chit_card = document.getElementById(chit);

        if(chit != "clickcount"){
            chit_card.style.display = "none";
        }

    }

    setEsempio();

    document.getElementById("prz-cht-tot").innerHTML = "0";
}

//Rimozione singola di un prodotto e visualizzazione nella pagina del carrello
function rimUna(_s){
    if (typeof(Storage) !== "undefined"){
        var x = Number(localStorage[_s]);
        var index = indice(_s);
        var prz_cht = chitarre[index].price;
        if (localStorage.clickcount > "0" && localStorage[_s] > "0"){
            localStorage.clickcount = Number(localStorage.clickcount) - 1;
            localStorage.setItem(_s, --x);
        }
        renderProd(_s);
        document.getElementById("prz-cht-tot").innerHTML -= prz_cht;

        if(localStorage.clickcount === "0"){
            svuota();
        }

    }
}

//Rimozione totale di un prodotto e visualizzazione nella pagina del carrello
function rimAll(_s){
    if (typeof(Storage) !== "undefined"){
        var x = Number(localStorage[_s]);
        var index = indice(_s);
        var prz_cht = x * chitarre[index].price;
        if (localStorage.clickcount > "0" && localStorage[_s] > "0"){
            localStorage.clickcount = Number(localStorage.clickcount) - x;
        }
        localStorage.setItem(_s, "0");

        renderProd(_s);
        document.getElementById("prz-cht-tot").innerHTML -= prz_cht;
        if(localStorage.clickcount === "0"){
            svuota();
        }
    }
}
