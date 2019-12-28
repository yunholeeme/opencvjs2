let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

//video
const videoForm = document.querySelector(".js-videoForm"),
videoButton = videoForm.querySelector("input");

videoButton.addEventListener("click", handleVideoButton);
let video = document.querySelector(".js-video");

//====================== cv is not defined

// const canvasFrame = document.querySelector(".js-canvasFrame");
// const context = canvasFrame.getContext("2d");
// const src = new cv.Mat(height, width, cv.CV_8UC4);
// const dst = new cv.Mat(height, width, cv.CV_8UC1);

// const FPS = 30;
// function processVideo() {
//     console.log("processVideo");
//     let begin = Date.now();
//     context.drawImage(video, 0, 0, width, height);
//     src.data.set(context.getImageData(0, 0, width, height).data);
//     cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
//     cv.imshow("canvasOutput2", dst); // canvasOutput is the id of another <canvas>;
//     // schedule next one.
//     let delay = 1000/FPS - (Date.now() - begin);
//     setTimeout(processVideo, delay);
// }

// // schedule first one.
// setTimeout(processVideo, 0);
//====================== cv is not defined

function handleVideoButton() {
    getVideo();
}

function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("An error occurred! " + err);
        });
}

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