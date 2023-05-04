const sabancuy = document.querySelector('#sabanc');
const palizada = document.querySelector('#palizada');
const calakmul = document.querySelector('#calakmul');
const candelaria = document.querySelector('#candelaria');
const hopelchen = document.querySelector('#hopelchen');




const row = document.querySelector('.row');
const row_dos = document.querySelector('.row-dos');
const row_tres = document.querySelector('.row-tres');
const row_cuatro = document.querySelector('.row-cuatro');
const row_cinco = document.querySelector('.row-cinco');




palizada.addEventListener('click', () => {
    document.querySelector('.row').style.display = "none";
    document.querySelector('.row-tres').style.display = "none";
    document.querySelector('.row-cuatro').style.display = "none";
    document.querySelector('.row-cinco').style.display = "none";
    document.querySelector('.row-dos').style.display = "flex";
    document.querySelector('#palizada').classList.add("active-dos");
    document.querySelector('#sabanc').classList.remove("active");
    document.querySelector('#sabanc').classList.remove("active-uno");
    document.querySelector('#calakmul').classList.remove("active-tres");
    document.querySelector('#candelaria').classList.remove("active-cuatro");
    document.querySelector('#hopelchen').classList.remove("active-cinco");

})

sabancuy.addEventListener('click', () => {
    document.querySelector('.row').style.display = "flex";
    document.querySelector('.row-dos').style.display = "none";
    document.querySelector('.row-tres').style.display = "none";
    document.querySelector('.row-cuatro').style.display = "none";
    document.querySelector('.row-cinco').style.display = "none";
    document.querySelector('#sabanc').classList.add("active-uno");
    document.querySelector('#palizada').classList.remove("active-dos");
    document.querySelector('#calakmul').classList.remove("active-tres");
    document.querySelector('#candelaria').classList.remove("active-cuatro");
    document.querySelector('#hopelchen').classList.remove("active-cinco");

})

calakmul.addEventListener('click', () => {
    document.querySelector('.row').style.display = "none";
    document.querySelector('.row-dos').style.display = "none";
    document.querySelector('.row-cuatro').style.display = "none";
    document.querySelector('.row-cinco').style.display = "none";
    document.querySelector('.row-tres').style.display = "flex";
    document.querySelector('#calakmul').classList.add("active-tres");
    document.querySelector('#palizada').classList.remove("active-dos");
    document.querySelector('#candelaria').classList.remove("active-cuatro");
    document.querySelector('#sabanc').classList.remove("active");
    document.querySelector('#sabanc').classList.remove("active-uno");
    document.querySelector('#hopelchen').classList.remove("active-cinco");

})

candelaria.addEventListener('click', () => {
    document.querySelector('.row').style.display = "none";
    document.querySelector('.row-dos').style.display = "none";
    document.querySelector('.row-tres').style.display = "none";
    document.querySelector('.row-cinco').style.display = "none";
    document.querySelector('.row-cuatro').style.display = "flex";
    document.querySelector('#candelaria').classList.add("active-cuatro");
    document.querySelector('#calakmul').classList.remove("active-tres");
    document.querySelector('#hopelchen').classList.remove("active-cinco");
    document.querySelector('#sabanc').classList.remove("active");
    document.querySelector('#sabanc').classList.remove("active-uno");
    document.querySelector('#palizada').classList.remove("active-dos");

})

hopelchen.addEventListener('click', () => {
    document.querySelector('.row').style.display = "none";
    document.querySelector('.row-dos').style.display = "none";
    document.querySelector('.row-tres').style.display = "none";
    document.querySelector('.row-cuatro').style.display = "none";
    document.querySelector('.row-cinco').style.display = "flex";
    document.querySelector('#hopelchen').classList.add("active-cinco");
    document.querySelector('#candelaria').classList.remove("active-cuatro");
    document.querySelector('#sabanc').classList.remove("active");
    document.querySelector('#sabanc').classList.remove("active-uno");
    document.querySelector('#calakmul').classList.remove("active-tres");
    document.querySelector('#palizada').classList.remove("active-dos");

})