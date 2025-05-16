'use client';

import { useState } from 'react';
import styles from './page.module.css';

const calcTotalPoint = (arr: number[]) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

export default function Home() {
  const [samplePoints, setSamplePoints] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  console.log(samplePoints);
  const [sampleCounter, setSampleCounter] = useState(0);
  console.log(sampleCounter);
  const Clickhandler = () => {
    const newSamplePoints = structuredClone(samplePoints);
    newSamplePoints[sampleCounter] += 1;
    setSamplePoints(newSamplePoints);
    setSampleCounter((sampleCounter + 1) % 14);
  };
  const totalPoint = calcTotalPoint(samplePoints);
  console.log(totalPoint);

  //↓↓表示する内容↓↓
  return (
    //ボタンがクリック→clickHandler関数実行
    <div className={styles.container}>
      <button onClick={Clickhandler}>onClick</button>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={styles.cell}
              onClick={() => {
                console.log('a');
              }}
              style={{ backgroundPosition: `${sampleCounter * -30}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

//再帰関数
/*if()
board  の前に
(arr:             number)
userinputs[0~4] boardmap[1,0] => board[]tsx
constcalcboard
どのマスでユーザーがなにをした

初級～上級＋爆弾の数を決めるとか（カスタム）
見た目一緒 灰色のやつ（数字以外）
右上左上、下のバー無視
ブロックのデザイン=>css
時間（秒数）useEffect(検索)
クリックした後に爆弾を置く＝初回で爆発しない
 */
