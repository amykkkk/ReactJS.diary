import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("save");
  };
  /*
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  */
  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="editor"
          type="text"
          /*
          onChange={(e) => {
            //console.log(e.target.name);
            //setAuthor(e.target.value);
            setState({
              ...state, // 순서 중요(처음에 배치)
              author: e.target.value,
              //content: state.content,
            });
          }}
          */
        />
      </div>
      <div>
        <textarea
          //value={content}
          value={state.content}
          name="content"
          onChange={handleChangeState}
          placeholder="diary"
          type="text"
          /*
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
              //author: state.author,
            });
          }}
          */
        />
      </div>
      <div>
        <span>Today's feeling : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>save</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
