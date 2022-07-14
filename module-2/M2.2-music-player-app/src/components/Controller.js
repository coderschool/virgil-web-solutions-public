import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Controller() {
  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayPreviousTrack = () => {
    playPreviousTrack();
  };

  const handlePlayNextTrack = () => {
    playNextTrack();
  };

  return (
    <div className="controller">
      <button onClick={handlePlayPreviousTrack}>
        <svg viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"></path>
        </svg>
      </button>

      <button onClick={handleTogglePlay}>
        <svg viewBox="0 0 24 24">
          {isPlaying ? (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path>
          ) : (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"></path>
          )}
        </svg>
      </button>

      <button onClick={handlePlayNextTrack}>
        <svg viewBox="0 0 24 24">
          <path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Controller;
