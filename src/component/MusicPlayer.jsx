import React, { useRef, useState } from "react";
import music from "../assets/music/Masego-QueenTings.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause functionality
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle audio end to loop
  const handleEnded = () => {
    audioRef.current.currentTime = 0; // Reset to start
    audioRef.current.play(); // Play again
  };

  return (
    <div>
      {/* Play/Pause Buttons */}
      <div className="pr-2">
        <svg
          enableBackground="new 0 0 512 512"
          width="20"
          height="20"
          id="play"
          viewBox="0 0 45 45"
          className={`${isPlaying ? "hidden" : "flex"} fill-green-600`}
          onClick={togglePlay}
        >
          <path d="m20 33 12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z" />
        </svg>

        <svg
          enableBackground="new 0 0 512 512"
          width="20"
          height="20"
          id="Pause"
          viewBox="0 0 45 45"
          className={`${isPlaying ? "flex" : "hidden"} fill-red-600`}
          onClick={togglePlay}
        >
          <path d="M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z" />
        </svg>
      </div>

      <audio
        ref={audioRef}
        src={music}
        onEnded={handleEnded}
        className="hidden"
      />
    </div>
  );
};

export default MusicPlayer;
