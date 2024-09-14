import { useNavigate } from "react-router-dom";
import styles from "../DiaryCard/DiaryCard.module.css";
import { MdDelete } from "react-icons/md";

export default function DiaryCard({ diary, onDelete }) {
  const { title, text, id } = diary;
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleDetailClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleDetailClick}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>

      <button onClick={handleDelete} className={styles.deleteButton}>
        <MdDelete />
      </button>
    </div>
  );
}
