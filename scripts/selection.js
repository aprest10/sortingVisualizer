function selection_sort() {
    c_delay = 0;

    for (let i = 0; i < arrayValue - 1; i++) {
        div_update(divs[i], divSize[i], "#e69c9c");

        let index_min = i;

        for (let j = i + 1; j < arrayValue; j++) {
            div_update(divs[j], divSize[j], "#cddfa0");

            if (divSize[j] < divSize[index_min]) {
                if (index_min !== i) {
                    div_update(divs[index_min], divSize[index_min], "#97beea");
                }
                index_min = j;
                div_update(divs[index_min], divSize[index_min], "#e69c9c");
            } else {
                div_update(divs[j], divSize[j], "#97beea");
            }
        }

        if (index_min !== i) {
            const temp = divSize[index_min];
            divSize[index_min] = divSize[i];
            divSize[i] = temp;

            div_update(divs[index_min], divSize[index_min], "#e69c9c");
            div_update(divs[i], divSize[i], "#e69c9c");
            div_update(divs[index_min], divSize[index_min], "#97beea");
        }
        div_update(divs[i], divSize[i], "#6fd08e");
        div_update(divs[i+1], divSize[i+1], "#6fd08e");
    }
}