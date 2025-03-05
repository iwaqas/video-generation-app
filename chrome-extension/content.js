// filepath: /video-generation-app/chrome-extension/content.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('generate-video');
    if (button) {
        button.addEventListener('click', function() {
            const videoScript = document.getElementById('video-script').value;
            const audioOption = document.getElementById('audio-option').value;

            // Send a message to the background script to generate the video
            chrome.runtime.sendMessage({
                action: 'generateVideo',
                script: videoScript,
                audio: audioOption
            }, function(response) {
                if (response.success) {
                    alert('Video generation started!');
                } else {
                    alert('Error generating video: ' + response.error);
                }
            });
        });
    }
});