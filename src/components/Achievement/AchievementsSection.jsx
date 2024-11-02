import AchievementCard from "./AchievementCard";
import { FaCertificate } from "react-icons/fa"; // You can use a different icon if preferred
import "./AchievementsSection.css";

function AchievementsSection() {
  return (
    <div className="achievements-section">
      <AchievementCard
        icon={<FaCertificate />} // Icon representing accreditation
        title="Akreditasi B"
        description="Berdasarkan Keputusan BAN-PT Nomor: 3318/SK/BAN-PT/Akred/S/IX/2019, Program Studi Teknologi Informasi, pada Program Sarjana Universitas Ibn Khaldun Bogor, memenuhi syarat peringkat Akreditasi B."
      />
    </div>
  );
}

export default AchievementsSection;
