import { useNavigate } from "react-router-dom";
import styles from "../DiaryCard/DiaryCard.module.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

export default function DiaryCard({ diary, onDelete, isEditable }) {
  const { title, text, id } = diary;
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
      {isEditable && (
        <div className={styles.buttonWrapper}>
          <button onClick={handleEditClick} className={styles.editButton}>
            <MdModeEdit />
          </button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
}
