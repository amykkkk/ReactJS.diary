import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "heachan",
    content: "000606",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "mark",
    content: "990824",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "jeno",
    content: "marklee",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "renjun",
    content: "marklee",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
