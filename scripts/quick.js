function quick() {
    c_delay = 0;
    quick_sort(0, arrayValue - 1);
}

function quick_partition(start, end) {
    let i = start + 1;
    const piv = divSize[start];
    div_update(divs[start], divSize[start], "#cddfa0");

    for (let j = start + 1; j <= end; j++) {
        if (divSize[j] < piv) {
            div_update(divs[j], divSize[j], "#cddfa0");

            div_update(divs[i], divSize[i], "#e69c9c");
            div_update(divs[j], divSize[j], "#e69c9c");

            let temp = divSize[i];
            divSize[i] = divSize[j];
            divSize[j] = temp;

            div_update(divs[i], divSize[i], "#e69c9c");
            div_update(divs[j], divSize[j], "#e69c9c");

            div_update(divs[i], divSize[i], "#97beea");
            div_update(divs[j], divSize[j], "#97beea");

            i += 1;
        }
    }
    div_update(divs[start], divSize[start], "#e69c9c");
    div_update(divs[i - 1], divSize[i - 1], "#e69c9c");

    const temp = divSize[start];
    divSize[start] = divSize[i - 1];
    divSize[i - 1] = temp;

    div_update(divs[start], divSize[start], "#e69c9c");
    div_update(divs[i - 1], divSize[i - 1], "#e69c9c");

    for (let t = start; t <= i; t++) {
        div_update(divs[t], divSize[t], "#6fd08e");
    }

    return i - 1;
}

function quick_sort(start, end) {
    if (start < end) {
        let piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}