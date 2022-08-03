export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(1000); // 文字を渡しても数値返還されるので緩い・危ない
  };
  return (
    <div>
      <p>練習1</p>
      <button onClick={onClickPractice}>練習1実行</button>
    </div>
  );
};
