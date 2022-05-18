import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function TrackList() {
  const { trackList, playTrack, currentTrackIndex } = useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        <button
          className="strack-btn"
          key={index}
          onClick={() => {
            playTrack(index);
          }}
        >
          <svg>
            {currentTrackIndex === index ? (
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path>
            ) : (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path>
            )}
          </svg>
          <p>{track.name}</p>
        </button>
      ))}
    </div>
  );
}

export default TrackList;
