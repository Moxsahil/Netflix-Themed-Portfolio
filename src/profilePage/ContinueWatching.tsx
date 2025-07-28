import React from "react";
import { Link } from "react-router-dom";
import "./ContinueWatching.css";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventurer";

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: "/images/music.jpg", link: "/music" },
    {
      title: "Reading",
      imgSrc: "/images/book.jpg",
      link: "/reading",
    },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      link: "/contact-me",
    },
  ],
  developer: [
    {
      title: "Music",
      imgSrc: "/images/music.jpg",
      link: "/music",
    },
    {
      title: "Reading",
      imgSrc: "/images/book.jpg",
      link: "/reading",
    },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/id/1028/300/200",
      link: "/certifications",
    },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      link: "/contact-me",
    },
  ],
  stalker: [
    {
      title: "Reading",
      imgSrc: "/images/book.jpg",
      link: "/reading",
    },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      link: "/contact-me",
    },
  ],
  adventurer: [
    {
      title: "Music",
      imgSrc: "https://picsum.photos/id/1025/300/200",
      link: "/music",
    },
    {
      title: "Reading",
      imgSrc: "/images/book.jpg",
      link: "/reading",
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/id/1028/300/200",
      link: "/certifications",
    },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      link: "/contact-me",
    },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
