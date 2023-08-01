import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";
import OptimizeTest from "./OptimizeTest";

function App() {
  const [data, setData] = useState([]); // 빈배열로 시작
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //Math.floor 정수변환(소숫점 삭제) 0~4 +1 > 1~5까지
        created_date: new Date().getTime(),
        id: dataId.current++, // return이 바로 되서 +1 > ++로 사용
      };
    });

    setData(initData);
  };
  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1; // list 갯수 더해줌
    setData([newItem, ...data]); //순서> 새로추가 맨앞으로
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map(
        (
          it //모든 요소 중에서 targetId가 일치하는것만 content부분을 newContent 수정
        ) => (it.id === targetId ? { ...it, content: newContent } : it)
      )
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  // usememo는 값을 return, 함수❌ 값으로 사용

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
      <div>total : {data.length}</div>
      <div>good : {goodCount}</div>
      <div>bad : {badCount}</div>
      <div>good(%) : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
