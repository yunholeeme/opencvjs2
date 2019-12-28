let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function() {
    let mat = cv.imread(imgElement);
    let dst = new cv.Mat();

    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOutput', dst);
    mat.delete();
};

const p = document.querySelector(".js-status");

function onOpenCvReady() {
    p.innerHTML = "OpenCV.js is ready.";
}

function init() {

}

init();