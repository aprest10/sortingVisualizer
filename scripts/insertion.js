function insertion() {
    c_delay = 0;

    for (let j = 0; j < arrayValue; j++) {
        div_update(divs[j], divSize[j], "#cddfa0");

        const key = divSize[j];
        let i = j - 1;
        while (i >= 0 && divSize[i] > key) {
            div_update(divs[i], divSize[i], "#e69c9c");
            div_update(divs[i + 1], divSize[i + 1], "#e69c9c");

            divSize[i + 1] = divSize[i];

            div_update(divs[i], divSize[i], "#e69c9c");
            div_update(divs[i + 1], divSize[i + 1], "#e69c9c");

            div_update(divs[i], divSize[i], "#97beea");
            if (i === (j - 1)) {
                div_update(divs[i + 1], divSize[i + 1], "#cddfa0");
            } else {
                div_update(divs[i + 1], divSize[i + 1], "#97beea");
            }
            i -= 1;
            div_update(divs[i+1], divSize[i+1], '#97beea');
        }
        divSize[i + 1] = key;

        for (let t = 0; t < j; t++) {
            div_update(divs[t], divSize[t], "#6fd08e");
        }
        div_update(divs[j], divSize[j], '#6fd08e');
    }
}