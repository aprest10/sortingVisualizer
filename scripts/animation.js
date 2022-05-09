let speed = 100;
let delayTime;

algoSpeed.addEventListener("input", animationSpeed);

function animationSpeed() {
    const arraySpeed = algoSpeed.value;
    switch (parseInt(arraySpeed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 100;
            break;
        case 4:
            speed = 1000;
            break;
        case 5:
            speed = 10000;
            break;
    }
    delayTime = 10000 / (Math.floor(arrayValue / 10) * speed);
}

delayTime = 10000 / (Math.floor(arrayValue / 10) * speed);
let c_delay = 0;

function div_update(arrayContainer, height, color) {
    window.setTimeout(function () {
        arrayContainer.style = 'margin:0% ' + marginSize + '%; width: ' + (100 / arrayValue - (2 * marginSize)) + '%; height: ' + height + '%; background-color: ' + color + ';';
    }, c_delay += delayTime);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (let i = 0; i < algoBtn.length; i++) {
            algoBtn[i].classList = [];
            algoBtn[i].classList.add("btn_unselected");
            algoBtn[i].disabled = false;
            arraySize.disabled = false;
            createBtn.disabled = false;
            algoSpeed.disabled = false;
        }
    }, c_delay += delayTime);
}