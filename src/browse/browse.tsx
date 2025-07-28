import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import StalkerImage from "../images/stalker.png";
import developerImage from "../images/developer.png";
import recruiterImage from "../images/recruiter.png";
import adventurerImage from "../images/adventurer.png";
import "./browse.css";
// import video1 from "../videos/recruiter.mp4";

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: recruiterImage,
      // backgroundGif:
      //   "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWZtZnFzd3d0YjdpOXpxNjZpM3p3N2NpMW45bnkwYzQwY29rYWxyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2vq9I9HGKrpjaHNLVb/giphy.gif",
      backgroundVideo: "/videos/recruiter.mp4",
    },
    {
      name: "developer",
      image: developerImage,
      // backgroundGif:
      //   "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGcyYnBoM3h5aXl6OHJuN3FrMG55c3dieWZ4bDYxd2J1czU4eHBpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4rZA5D22301iMgrUNd/giphy.gif",

      backgroundVideo: "/videos/developer.mp4",
    },
    {
      name: "stalker",
      image: StalkerImage,
      // backgroundGif:
      //   "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
      backgroundVideo: "/videos/stalker.mp4",
    },
    {
      name: "adventurer",
      image: adventurerImage,
      // backgroundGif:
      //   "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
      backgroundVideo: "/videos/adventure.mp4",
    },
  ];

  const handleProfileClick = (profile: {
    name: string;
    image: string;
    // backgroundGif: string;
    backgroundVideo: string;
  }) => {
    navigate(`/profile/${profile.name}`, {
      state: {
        profileImage: profile.image,
        // backgroundGif: profile.backgroundGif,
        backgroundVideo: profile.backgroundVideo,
      },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
