import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
} from "react-icons/fa";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventurer";

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    // { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    {
      title: "Skills",
      imgSrc: "/images/skills.jpg",
      icon: <FaCode />,
      route: "/skills",
    },
    {
      title: "Experience",
      imgSrc: "/images/experience.jpg",
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/certifications/250/200",
      icon: <FaCertificate />,
      route: "/certifications",
    },
    // { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
    {
      title: "Projects",
      imgSrc: "/images/projects.jpg",
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
  ],
  developer: [
    {
      title: "Skills",
      imgSrc: "https://picsum.photos/seed/coding/250/200",
      route: "/skills",
      icon: <FaCode />,
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/development/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/badge/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/work/250/200",
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    // { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
  ],
  stalker: [
    // { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    {
      title: "Contact Me",
      imgSrc: "/images/email.jpg",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Projects",
      imgSrc: "/images/projects.jpg",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Experience",
      imgSrc: "/images/experience.jpg",
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/achievements/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
  adventurer: [
    {
      title: "Music",
      imgSrc: "/images/music.jpg",
      route: "/music",
      icon: <FaMusic />,
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/innovation/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/seed/books/250/200",
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/medal/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
