import styles from "../DiaryCard/DiaryCard.module.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

export default function DiaryCard({ diary, onDelete, onEdit }) {
  const { title, text, id } = diary;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    onEdit(id);
  };

  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttonWrapper}>
        <button onClick={handleEditClick} className={styles.editButton}>
          <MdModeEdit />
        </button>
        <button onClick={handleDelete} className={styles.deleteButton}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
