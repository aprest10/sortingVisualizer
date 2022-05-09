const arraySize = document.getElementById('array_size');
const algoSpeed = document.getElementById("algo_speed");
const createBtn = document.getElementById("create");
let arrayValue = arraySize.value;

const algoBtn = document.querySelectorAll(".algo_buttons button");

const divSize = [];
const divs = [];
let marginSize;
const arrayContainer = document.getElementById("array_container");
arrayContainer.style = "flex-direction:row";

createBtn.addEventListener("click", createArray);
arraySize.addEventListener("input", updateArray);

function createArray() {
    arrayContainer.innerHTML = '';

    for (let i = 0; i < arrayValue; i++) {
        divSize[i] = Math.floor(Math.random() * 0.5 * (arraySize.max - arraySize.min)) + 10;
        divs[i] = document.createElement('div');
        arrayContainer.appendChild(divs[i]);
        marginSize = 0.1;
        divs[i].style = 'margin:0% ' + marginSize + '%; background-color:#97beea; width: ' + (100 / arrayValue - (2 * marginSize)) + '%; height: ' + (divSize[i]) + '%;';
    }
}

function updateArray() {
    arrayValue = arraySize.value;
    createArray();
}

window.onload = updateArray();

for (let i = 0; i < algoBtn.length; i++) {
    algoBtn[i].addEventListener("click", startAlgo);
}

function disable_buttons() {
    for (let i = 0; i < algoBtn.length; i++) {
        algoBtn[i].classList = [];
        algoBtn[i].classList.add("btn_locked");
        algoBtn[i].disabled = true;
        arraySize.disabled = true;
        createBtn.disabled = true;
        algoSpeed.disabled = true;
    }
}

function startAlgo() {
    disable_buttons();
    this.classList.add("btn_selected");
    switch (this.innerHTML) {
        case "Bubble":
            bubble();
            enable_buttons();
            break;
        case "Selection":
            selection_sort();
            enable_buttons();
            break;
        case "Insertion":
            insertion();
            enable_buttons();
            break;
        case "Merge":
            merge();
            enable_buttons();
            break;
        case "Quick":
            quick();
            enable_buttons();
            break;
        case "Heap":
            heap();
            enable_buttons();
            break;
        default:
            enable_buttons();
            break;
    }
}