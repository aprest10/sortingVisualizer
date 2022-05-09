function bubble() {
    c_delay = 0;

    for (let i = 0; i < arrayValue; i++) {
        for (let j = 0; j < arrayValue - i - 1; j++) {
            div_update(divs[j], divSize[j], "#cddfa0");

            if (divSize[j] > divSize[j + 1]) {
                div_update(divs[j], divSize[j], "#e69c9c");
                div_update(divs[j + 1], divSize[j + 1], "#e69c9c");

                let temp = divSize[j];
                divSize[j] = divSize[j + 1];
                divSize[j + 1] = temp;

                div_update(divs[j], divSize[j], "#e69c9c");
                div_update(divs[j + 1], divSize[j + 1], "#e69c9c");
            }
            div_update(divs[j], divSize[j], "#97beea");
            div_update(divs[j+1], divSize[j+1], '#6fd08e');
        }
    }
    div_update(divs[0], divSize[0], "#6fd08e");
}