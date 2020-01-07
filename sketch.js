let arr = [];
let count = 0;
let check = false;
async function quickSort(arr, first, last) {
    if (first < last) {
        count++;
        let pilot = arr[last];
        let j = first - 1;
        for (let i = first; i <= last - 1; i++) {
            if (arr[i] < pilot) {
                j++;
                await swap(arr, i, j);
            }
        }
        let pi = j + 1;
        await swap(arr, pi, last);
        Promise.all([quickSort(arr, first, pi - 1), quickSort(arr, pi + 1, last)]);
    }
}
function run() {
    loop();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function swap(arr, i, j) {
    await sleep(10);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
function visual(arr) {
    let len = arr.length
    push();
    translate(0, 400);
    for (let i = 0; i < len; i++) {
        fill(255 - arr[i]);
        rect(i * (1600 / len), 0, 1600 / len, - arr[i]);
    };
    pop();
}
function setup() {
    createCanvas(1600, 400).parent('sketch-holder');
    for (let i = 0; i < 200; i++) {
        arr.push(random(0, 255));
    }
    noLoop();
    frameRate(60);
}
function draw() {
    background(51);
    visual(arr);
    console.log(count);

}