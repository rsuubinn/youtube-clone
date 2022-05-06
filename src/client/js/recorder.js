const recordBtn = document.getElementById("recordBtn");
const video = document.getElementById("preview");

let stream;

const handleStart = () => {
  recordBtn.innerText = "Stop Recording";
  recordBtn.removeEventListener("click", handleStart);
  recordBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    console.log("Recording Done");
    console.log(e);
    console.log(e.data);
  };
  recorder.start();
  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const handleStop = () => {
  recordBtn.innerText = "Start Recording";
  recordBtn.removeEventListener("click", handleStop);
  recordBtn.addEventListener("click", handleStart);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  video.srcObject = stream;
  video.play();
};

init();

recordBtn.addEventListener("click", handleStart);
