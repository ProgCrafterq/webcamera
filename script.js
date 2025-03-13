const video = document.getElementById('video');
const startButton = document.getElementById('startButton');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing the webcam: ', err);
    }
}

startButton.addEventListener('click', () => {
    startCamera();
    startButton.style.display = 'none'; 
});
