import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEdit";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate(); // Page Moving
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary : ${id} Diary Edit`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targerDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targerDiary) {
        setOriginData(targerDiary);
      } else {
        alert("There is no diray.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
