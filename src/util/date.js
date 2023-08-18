export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
  //toISOString: ISO형식의 문자열을 반환(YYYY-MM-DDTHH:mm:ss.sssZ)
};
