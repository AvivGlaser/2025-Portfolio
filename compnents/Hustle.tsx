import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const initialHustleList = [
  {
    text: "I joined 'One Term a Day' WhatsApp group",
    link: "https://www.linkedin.com/posts/noa-aizen_%D7%90%D7%99%D7%9A-%D7%A9%D7%99%D7%97%D7%AA-%D7%9E%D7%A1%D7%93%D7%A8%D7%95%D7%9F-%D7%A4%D7%9B%D7%94-%D7%9C%D7%A7%D7%94%D7%99%D7%9C%D7%94-%D7%A9%D7%9C-300-%D7%90%D7%99%D7%A9-ugcPost-7310186522920591360-Unmh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
  },
  {
    text: "Contacted the student coordinator at 'John Bryce' to get access to updated course recordings",
  },
  {
    text: "I use public transportation every day, gaining an extra 35 minutes each direction to learn and progress on my projects",
  },
  {
    text: "Every Thursday, I make sure all my housework is done to have more learning time on the weekends",
  },
];

export default function Hustle() {
  const [hustleList, setHustleList] = useState(initialHustleList);

  const addBullet = () => {
    const newBullet = prompt("Enter new hustle activity: ");
    if (newBullet) {
      setHustleList([...hustleList, { text: newBullet }]);
    }
  };

  return (
    <div className={`hustle-section`}>
      <div className="header">
        <h2>Hustle</h2>
        <p>What do I do to find a job while working full time?</p>
      </div>
      <div className="hustle-list">
        {hustleList.map((hustle, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="hustle-item"
          >
            <p>
              {hustle.link ? (
                <a href={hustle.link} target="_blank" rel="noopener noreferrer">
                  {hustle.text}
                </a>
              ) : (
                hustle.text
              )}
            </p>
          </motion.div>
        ))}
      </div>

      <button className="add-hustle" onClick={addBullet}>
        <Plus size={20} /> Do you have any suggestions for me?
      </button>
    </div>
  );
}
