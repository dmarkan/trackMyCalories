let date = new Date();
let day = date.getDay();
let dayInMonth = date.getDate();
let month = date.getMonth() + 1;
let fullDate = dayInMonth + "." + month;
let unosKalorija = document.getElementById("unosKalorija");
let ponHead = document.getElementById("ponHead");
let utoHead = document.getElementById("utoHead");
let sreHead = document.getElementById("sreHead");
let cetHead = document.getElementById("cetHead");
let petHead = document.getElementById("petHead");
let subHead = document.getElementById("subHead");
let nedHead = document.getElementById("nedHead");
let poljePon = document.getElementById("poljePon");
let poljeUto = document.getElementById("poljeUto");
let poljeSre = document.getElementById("poljeSre");
let poljeCet = document.getElementById("poljeCet");
let poljePet = document.getElementById("poljePet");
let poljeSub = document.getElementById("poljeSub");
let poljeNed = document.getElementById("poljeNed");
let snimi = document.getElementById("snimi");
let obrisi = document.getElementById("obrisi");
let save;

window.onload = () => {
    save = localStorage.getItem('save');
    save = save === 'true';
    if (save == true) {
        ponHead.innerHTML = localStorage.getItem('ponHead');
        poljePon.innerHTML = localStorage.getItem('poljePon');
        utoHead.innerHTML = localStorage.getItem('utoHead');
        poljeUto.innerHTML = localStorage.getItem('poljeUto');
        sreHead.innerHTML = localStorage.getItem('sreHead');
        poljeSre.innerHTML = localStorage.getItem('poljeSre');
        cetHead.innerHTML = localStorage.getItem('cetHead');
        poljeCet.innerHTML = localStorage.getItem('poljeCet');
        petHead.innerHTML = localStorage.getItem('petHead');
        poljePet.innerHTML = localStorage.getItem('poljePet');
        subHead.innerHTML = localStorage.getItem('subHead');
        poljeSub.innerHTML = localStorage.getItem('poljeSub');
        nedHead.innerHTML = localStorage.getItem('nedHead');
        poljeNed.innerHTML = localStorage.getItem('poljeNed');
    }
}

unosKalorija.addEventListener("change", () => {
let unosKalorijaVrednost = document.getElementById("unosKalorija").value;
    switch (day) {
        case 1:
            ponHead.innerHTML = "Ponedeljak" + "<br>" + fullDate;
            poljePon.innerHTML = parseInt(poljePon.innerHTML) + parseInt(unosKalorijaVrednost);
            break;
                case 2:
                utoHead.innerHTML = "Utorak" + "<br>" + fullDate;
                poljeUto.innerHTML = parseInt(poljeUto.innerHTML) + parseInt(unosKalorijaVrednost);
                break;  
                case 3:
                sreHead.innerHTML = "Sreda" + "<br>" + fullDate;
                poljeSre.innerHTML = parseInt(poljeSre.innerHTML) + parseInt(unosKalorijaVrednost);
                break;  
                case 4:
                cetHead.innerHTML = "Četvrtak" + "<br>" + fullDate;
                poljeCet.innerHTML = parseInt(poljeCet.innerHTML) + parseInt(unosKalorijaVrednost);
                break;  
                case 5:
                petHead.innerHTML = "Petak" + "<br>" + fullDate;
                poljePet.innerHTML = parseInt(poljePet.innerHTML) + parseInt(unosKalorijaVrednost);
                break;  
                case 6:
                subHead.innerHTML = "Subota" + "<br>" + fullDate;
                poljeSub.innerHTML = parseInt(poljeSub.innerHTML) + parseInt(unosKalorijaVrednost);
                break;
                case 7:
                nedHead.innerHTML = "Nedelja" + "<br>" + fullDate;
                poljeNed.innerHTML = parseInt(poljeNed.innerHTML) + parseInt(unosKalorijaVrednost);
                break;
        default:
            break;
    }
    snimi.addEventListener("click", () => {
        save = true;
        localStorage.setItem('save', save);
        localStorage.setItem('ponHead', ponHead.innerHTML);
        localStorage.setItem('poljePon', poljePon.innerHTML);
        localStorage.setItem('utoHead', utoHead.innerHTML);
        localStorage.setItem('poljeUto', poljeUto.innerHTML);
        localStorage.setItem('sreHead', sreHead.innerHTML);
        localStorage.setItem('poljeSre', poljeSre.innerHTML);
        localStorage.setItem('cetHead', cetHead.innerHTML);
        localStorage.setItem('poljeCet', poljeCet.innerHTML);
        localStorage.setItem('petHead', petHead.innerHTML);
        localStorage.setItem('poljePet', poljePet.innerHTML);
        localStorage.setItem('subHead', subHead.innerHTML);
        localStorage.setItem('poljeSub', poljeSub.innerHTML);
        localStorage.setItem('nedHead', nedHead.innerHTML);
        localStorage.setItem('poljeNed', poljeNed.innerHTML);
    })
})

obrisi.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})



