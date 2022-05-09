function merge() {
    c_delay = 0;

    merge_partition(0, arrayValue - 1);

    enable_buttons();
}

function merge_sort(start, mid, end) {
    let p = start
    let q = mid + 1;
    let arr = []
    let k = 0;

    for (let i = start; i <= end; i++) {
        if (p > mid) {
            arr[k++] = divSize[q++];
            div_update(divs[q - 1], divSize[q - 1], "#e69c9c");
        } else if (q > end) {
            arr[k++] = divSize[p++];
            div_update(divs[p - 1], divSize[p - 1], "#e69c9c");
        } else if (divSize[p] < divSize[q]) {
            arr[k++] = divSize[p++];
            div_update(divs[p - 1], divSize[p - 1], "#e69c9c");
        } else {
            arr[k++] = divSize[q++];
            div_update(divs[q - 1], divSize[q - 1], "#e69c9c");
        }
    }

    for (let t = 0; t < k; t++) {
        divSize[start++] = arr[t];
        div_update(divs[start - 1], divSize[start - 1], "#6fd08e");
    }
}

function merge_partition(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        div_update(divs[mid], divSize[mid], "#cddfa0");

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}