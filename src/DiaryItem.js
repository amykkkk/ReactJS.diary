const DiaryItem = ({
  onDelete,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          editor : {author} | feeling : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 삭제하겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        Deleted
      </button>
    </div>
  );
};

export default DiaryItem;
