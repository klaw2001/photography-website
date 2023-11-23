import React, { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    if (cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinaryRef;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "djckyy3ew",
    });
  }, []);
  return (
    <>
      <video ref={videoRef} data-cld-public-id="samples/cld-sample-video" />
    </>
  );
};

export default VideoPlayer;
