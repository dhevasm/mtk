setInterval(() => {
    const opsi = document.getElementById("opsi");
    
    const dim = document.querySelector(".dim");
    const jar = document.querySelector(".jar");
    const lus = document.querySelector(".lus");
    const kel = document.querySelector(".kel");
    if(opsi.value == "diameter"){
        dim.classList.remove("none");
        jar.classList.add("none")
        lus.classList.add("none")
        kel.classList.add("none")
    }
    if(opsi.value == "jari2"){
        dim.classList.add("none");
        jar.classList.remove("none")
        lus.classList.add("none")
        kel.classList.add("none")
    }
    if(opsi.value == "luas"){
        dim.classList.add("none");
        jar.classList.add("none")
        lus.classList.remove("none")
        kel.classList.add("none")
    }
    if(opsi.value == "keliling"){
        dim.classList.add("none");
        jar.classList.add("none")
        lus.classList.add("none")
        kel.classList.remove("none")
    }
    
}, 500);
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const bunder = document.querySelector(".lingkaran");
let diameter = 0;
let jari = 0;
let luas = 0;
let keliling = 0;

reset.addEventListener("click", () =>{
    const diameterin = document.getElementById("diameter");
    const jari2in = document.getElementById("jari2");
    const luasin = document.getElementById("luas");
    const kelilingin = document.getElementById("keliling");
    const hasil = document.querySelector(".hasil");

    diameterin.value = "";
    jari2in.value = "";
    luasin.value = "";
    kelilingin.value = "";

    bunder.style.width = `0px`;
    bunder.style.height = `0px`;
    bunder.classList.remove("animated");
    hasil.innerHTML ="";
});

submit.addEventListener("click", () =>{
    const diameterin = document.getElementById("diameter");
    const jari2in = document.getElementById("jari2");
    const luasin = document.getElementById("luas");
    const kelilingin = document.getElementById("keliling");
    
    const opsi = document.getElementById("opsi");
    bunder.classList.add("animated");
    if(opsi.value == "diameter"){
        diameter = diameterin.value;
        bunder.style.width = `${diameter}cm`;
        bunder.style.height = `${diameter}cm`;
        luas = (3.14 * parseFloat(diameter)/2 * parseFloat(diameter)/2).toFixed(2);
        keliling = (3.14 * parseFloat(diameter)).toFixed(2);
    }
    if(opsi.value == "jari2"){
        diameter = parseFloat(jari2in.value) + parseFloat(jari2in.value);
        bunder.style.width = `${diameter}cm`;
        bunder.style.height = `${diameter}cm`;
        luas = (3.14 * parseFloat(diameter)/2 * parseFloat(diameter)/2).toFixed(2);
        keliling = (3.14 * parseFloat(diameter)).toFixed(2);
    }
    if(opsi.value == "luas"){
        luas = luasin.value;
        let jarikuadrat = (parseFloat(luas) / 3.14);
        jari = (Math.sqrt(jarikuadrat)).toFixed(2);
        diameter =( jari * 2).toFixed(2);
        keliling = (3.14 * diameter).toFixed(2);
        bunder.style.width = `${diameter}cm`;
        bunder.style.height = `${diameter}cm`;
    }
    if(opsi.value == "keliling"){
        keliling = kelilingin.value;
        diameter = (parseFloat(keliling) / 3.14).toFixed(2);
        jari = (diameter / 2).toFixed(2);
        luas = (3.14 * jari * jari).toFixed(2);
        bunder.style.width = `${diameter}cm`;
        bunder.style.height = `${diameter}cm`;
    }       

    jari = parseFloat(diameter)/2;

    const hasil = document.querySelector(".hasil");

    hasil.innerHTML = `<div class='animated'><li>Diameter : <b>${diameter} cm</b></li><li>Jari -jari : <b>${jari} cm</b></li></div>
    <div class='animated'><li>Luas : <b>${luas} </b>cm2</li><li>Keliling : <b>${keliling} cm</b></li></div>`
});

const dim = document.querySelector(".dim");
const jar = document.querySelector(".jar");
const lus = document.querySelector(".lus");
const kel = document.querySelector(".kel");

let hotkkey = [dim,jar,lus,kel];

hotkkey.forEach(el => el.addEventListener("keypress", (e) =>{
    if(e.key == "Enter"){
        submit.click();
    }
}));