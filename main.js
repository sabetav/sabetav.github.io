const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;


function goNextPage(){
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                paper1.classList.add("flipped");
                break;
            case 2:
                paper2.classList.add("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper3.style.zIndex = 5;
                paper4.style.zIndex = 6;
                break;
        }
        currentLocation++;
    }
}

function goPrevPage(){
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                paper3.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper4.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                break;
            default:
                throw new Error("por aquí no es");
        }
        currentLocation--;
    }
}

// Modal del ID

var modal = document.getElementById("myModal");

var img = document.getElementById("id");
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
