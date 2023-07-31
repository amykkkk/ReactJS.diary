import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  //html dom 요소 접근
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //alert("작성자는 최소 1글자 이상 입력해주세요.");
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //alert("본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("save");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="editor"
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          name="content"
          onChange={handleChangeState}
          placeholder="diary"
          type="text"
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
