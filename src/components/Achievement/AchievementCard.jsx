import PropTypes from "prop-types";
import "./AchievementCard.css";

function AchievementCard({ icon, title, description }) {
  return (
    <div className="achievement-card">
      <div className="icon">{icon}</div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default AchievementCard;
