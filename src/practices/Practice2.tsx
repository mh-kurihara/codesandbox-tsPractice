export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    console.log(total);
    return total;
  };
  const onClickPractice = () => {
    getTotalFee(1000); // 文字を渡しても数値返還されるので緩い・危ない
  };
  return (
    <div>
      <p>練習2</p>
      <button onClick={onClickPractice}>練習2実行</button>
    </div>
  );
};
