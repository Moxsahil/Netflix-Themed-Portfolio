import React, { useRef, useState } from "react";
import "./Music.css";

import albumCover1 from "../images/Hall_Of_Fame.png";
import albumCover2 from "../images/Not_Afraid.jpg";
import albumCover3 from "../images/Believer.jpeg";
import albumCover4 from "../images/sixDays.jpeg";

import song1 from "../songs/Hall_Of_Fame.mp3";
import song2 from "../songs/Eminem - Not_Afraid.mp3";
import song3 from "../songs/Believer.mp3";
import song4 from "../songs/Six_days.mp3";

const favoriteAlbums = [
  {
    title: "Hall Of Fame",
    artist: "The Script",
    imgSrc: albumCover1,
    audioSrc: song1,
  },
  {
    title: "Not Afraid",
    artist: "Eminem",
    imgSrc: albumCover2,
    audioSrc: song2,
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    imgSrc: albumCover3,
    audioSrc: song3,
  },
  {
    title: "Six Days",
    artist: "Dj Shadow",
    imgSrc: albumCover4,
    audioSrc: song4,
  },
];

const Music: React.FC = () => {
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );

  const playSong = (index: number) => {
    if (
      currentPlayingIndex !== null &&
      audioRefs.current[currentPlayingIndex]
    ) {
      audioRefs.current[currentPlayingIndex].pause();
      audioRefs.current[currentPlayingIndex].currentTime = 0;
    }

    if (currentPlayingIndex === index) {
      setCurrentPlayingIndex(null);
    } else {
      audioRefs.current[index]?.play();
      setCurrentPlayingIndex(index);
    }
  };

  const handleNext = () => {
    if (currentPlayingIndex === null) return;
    const nextIndex = (currentPlayingIndex + 1) % favoriteAlbums.length;
    playSong(nextIndex);
  };

  const handlePrevious = () => {
    if (currentPlayingIndex === null) return;
    const prevIndex =
      (currentPlayingIndex - 1 + favoriteAlbums.length) % favoriteAlbums.length;
    playSong(prevIndex);
  };

  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div
              key={index}
              className="album-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={album.imgSrc}
                alt={album.title}
                className="album-image"
              />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>

                <div className="controls">
                  <button
                    onClick={handlePrevious}
                    className="icon-button"
                    title="Previous"
                  >
                    <img
                      src="/icons/previous.png"
                      alt="Previous"
                      className="icon-image"
                    />
                  </button>

                  <button
                    className="icon-button"
                    onClick={() => playSong(index)}
                    title={currentPlayingIndex === index ? "Pause" : "Play"}
                  >
                    <img
                      src={
                        currentPlayingIndex === index
                          ? "/icons/pause.png"
                          : "/icons/play.png"
                      }
                      alt={currentPlayingIndex === index ? "Pause" : "Play"}
                      className="icon-image"
                    />
                  </button>

                  <button
                    onClick={handleNext}
                    className="icon-button"
                    title="Next"
                  >
                    <img
                      src="/icons/next.png"
                      alt="Next"
                      className="icon-image"
                    />
                  </button>
                </div>

                <audio
                  ref={(el) => (audioRefs.current[index] = el!)}
                  src={album.audioSrc}
                  preload="auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
