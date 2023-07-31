import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>list</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defalutProps = {
  diaryList: [],
};

export default DiaryList;
