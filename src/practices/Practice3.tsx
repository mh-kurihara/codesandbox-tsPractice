export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    console.log(total);
    return total;
  };
  const onClickPractice = () => {
    let total: number = 0; // 代入する場合はlet
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習3</p>
      <button onClick={onClickPractice}>練習3実行</button>
    </div>
  );
};
