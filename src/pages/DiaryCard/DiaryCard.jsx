import { useNavigate } from "react-router-dom";
import styles from "../DiaryCard/DiaryCard.module.css";

export default function DiaryCard({ diary, onDelete }) {
  const { title, text, id } = diary;
  const navigate = useNavigate();
  const handleDetailClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleDetailClick}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
