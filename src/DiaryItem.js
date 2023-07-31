import { useRef, useState } from "react";

const DiaryItem = ({
  onRemove,
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false); // 수정 취소
    setLocalContent(content); // 데이터 초기화
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          editor : {author} | feeling : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>❌</button>
          <button onClick={handleEdit}>⭕️</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>✂️</button>
          <button onClick={toggleIsEdit}>✏️</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
