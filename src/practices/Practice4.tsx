export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(1000); // 文字を渡しても数値返還されるので緩い・危ない
  };
  return (
    <div>
      <p>練習4</p>
      <button onClick={onClickPractice}>練習4実行</button>
    </div>
  );
};
