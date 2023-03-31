import React, { useRef } from "react";
import Webcam from "react-webcam";

function CameraFeed() {
    const webcamRef = useRef(null);

    return (
        <div className="camera-feed">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
        </div>
    );
}

export default CameraFeed;
