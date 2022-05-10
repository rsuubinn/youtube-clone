import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const recordBtn = document.getElementById("recordBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = async () => {
  const ffmpeg = createFFmpeg({
    corePath: "/convert/ffmpeg-core.js",
    log: true,
  });
  await ffmpeg.load();

  ffmpeg.FS("writeFile", "recording.webm", await fetchFile(videoFile));
  await ffmpeg.run("-i", "recording.webm", "-r", "60", "output.mp4");

  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "My video.webm";
  document.body.appendChild(a);
  a.click();
};

const handleStart = () => {
  recordBtn.innerText = "Stop Recording";
  recordBtn.removeEventListener("click", handleStart);
  recordBtn.addEventListener("click", handleStop);
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

  // 녹화가 끝나면 코드 실행
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
  };
  recorder.start();
};

const handleStop = () => {
  recordBtn.innerText = "Download Recording";
  recordBtn.removeEventListener("click", handleStop);
  recordBtn.addEventListener("click", handleDownload);
  recorder.stop();
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
