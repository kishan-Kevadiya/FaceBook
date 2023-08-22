import React, { useRef } from 'react';

const MusicPlayer = ({ src, playOnLoad }) => {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play()
      .then(() => {
        // Music started playing successfully
      })
      .catch(error => {
        // Autoplay was prevented, handle the error gracefully
        console.log('Autoplay prevented:', error);
      });
  };

  return (
    <div>
      {playOnLoad ? (
        <>
          <audio ref={audioRef} controls={false} autoPlay>
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {/* Play button for welcome music */}
          <button onClick={playMusic}>Play</button>
        </>
      ) : (
        <audio ref={audioRef} controls={false} autoPlay={false}>
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;
