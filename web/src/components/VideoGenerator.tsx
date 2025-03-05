// filepath: /c:/Users/Waqas Rasheed/Documents/Github Projects/Yotomatic/video-generation-app/web/src/components/VideoGenerator.tsx
import React, { useState } from 'react';

const VideoGenerator = () => {
    const [script, setScript] = useState('');
    const [audio, setAudio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const handleScriptChange = (e) => {
        setScript(e.target.value);
    };

    const handleAudioChange = (e) => {
        setAudio(e.target.files[0]);
    };

    const generateVideo = async () => {
        setLoading(true);
        // Call the API to generate video
        try {
            const response = await fetch('/api/generate-video', {
                method: 'POST',
                body: JSON.stringify({ script, audio }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setVideoUrl(data.videoUrl);
        } catch (error) {
            console.error('Error generating video:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Video Generator</h2>
            <textarea
                value={script}
                onChange={handleScriptChange}
                placeholder="Enter your script here"
            />
            <input type="file" onChange={handleAudioChange} />
            <button onClick={generateVideo} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Video'}
            </button>
            {videoUrl && (
                <div>
                    <h3>Generated Video</h3>
                    <video src={videoUrl} controls />
                </div>
            )}
        </div>
    );
};

export default VideoGenerator;