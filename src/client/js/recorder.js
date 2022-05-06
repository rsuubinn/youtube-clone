const recordBtn = document.getElementById("recordBtn");
const video = document.getElementById("preview");

const handleRecord = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  video.srcObject = stream;
  video.play();
};

recordBtn.addEventListener("click", handleRecord);
