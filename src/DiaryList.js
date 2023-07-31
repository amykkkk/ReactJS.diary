import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>list</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
          /*
            //id가 없으면 idx사용
            <div key={it.id}>
                <div>editor: {it.author}</div>
                <div>diary: {it.content}</div>
                <div>emotion: {it.emotion}</div>
                <div>date(ms): {it.created_date}</div>
            </div>
            */
        ))}
      </div>
    </div>
  );
};

DiaryList.defalutProps = {
  diaryList: [],
};

export default DiaryList;
