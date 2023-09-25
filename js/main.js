const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 3;
let maxLocation= numOfPapers + 1;

function openbook(){

}

function closeBook(){

}

function goNextPage(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                break;
            
                case 2:
                   
                    paper2.classList.add("flipped");
                    break;

                    case 3:
                       
                        paper3.classList.add("flipped");
                        closeBook();
                        break;
                        default:
                            throw new Error("unkown state");
        }
        currentLocation++;
    }}

function goPrevPage(){

}