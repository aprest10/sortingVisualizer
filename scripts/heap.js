function heap() {
    c_delay = 0;
    heap_sort();
}

function swap(i, j) {
    div_update(divs[i], divSize[i], "#e69c9c");
    div_update(divs[j], divSize[j], "#e69c9c");

    const temp = divSize[i];
    divSize[i] = divSize[j];
    divSize[j] = temp;

    div_update(divs[i], divSize[i], "#e69c9c");
    div_update(divs[j], divSize[j], "#e69c9c");

    div_update(divs[i], divSize[i], "#97beea");
    div_update(divs[j], divSize[j], "#97beea");
}

function maxHeap(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && divSize[left] > divSize[largest]) {
        if (largest !== i) {
            div_update(divs[largest], divSize[largest], "#97beea");
        }

        largest = left;
        div_update(divs[largest], divSize[largest], "#e69c9c");
    }

    if (right < n && divSize[right] > divSize[largest]) {
        if (largest !== i) {
            div_update(divs[largest], divSize[largest], "#97beea");
        }

        largest = right;
        div_update(divs[largest], divSize[largest], "#e69c9c");
    }

    if (largest !== i) {
        swap(i, largest);
        maxHeap(n, largest);
    }
}

function heap_sort() {
    for (let i = Math.floor(arrayValue / 2) - 1; i >= 0; i--) {
        maxHeap(arrayValue, i);
    }

    for (let i = arrayValue - 1; i > 0; i--) {
        swap(0, i);
        div_update(divs[i], divSize[i], "#6fd08e");
        div_update(divs[i], divSize[i], "#cddfa0");

        maxHeap(i, 0);

        div_update(divs[i], divSize[i], "#97beea");
        div_update(divs[i], divSize[i], "#6fd08e");
    }
    div_update(divs[0], divSize[0], "#6fd08e");
}