import { useEffect } from "react";
import DiaryEdit from "../components/DiaryEdit";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary : New Diary`;
  }, []);

  return (
    <div>
      <DiaryEdit />
    </div>
  );
};

export default New;
