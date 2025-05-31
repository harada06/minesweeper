'use client';

import { useState } from 'react';
import styles from './page.module.css';

const calcTotalPoint = (arr: number[], counter: number) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total + counter;
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

  const [coverBoard, setCoverBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(true)), //true:開 false:閉
  );
  console.log(samplePoints);
  const [sampleCounter, setSampleCounter] = useState(0);
  console.log(sampleCounter);

  const Clickhandler = (rowIndex: number, colIndex: number) => {
    const newSamplePoints = structuredClone(samplePoints);
    newSamplePoints[sampleCounter] += 1;
    setSamplePoints(newSamplePoints);
    setSampleCounter((sampleCounter + 1) % 14);
    const newCoverBoard = structuredClone(coverBoard);
    newCoverBoard[rowIndex][colIndex] = false;
    setCoverBoard(newCoverBoard);
  };
  const totalPoint = calcTotalPoint(samplePoints);
  console.log(totalPoint);

  //↓↓表示する内容↓↓
  return (
    //ボタンがクリック→clickHandler関数実行
    <div className={styles.container}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={styles.cell}
              style={{ backgroundPosition: `${sampleCounter * -30}px` }}
            >
              {coverBoard[rowIndex][colIndex] && (
                <div className={styles.coverCell}>
                  <button
                    onClick={() => Clickhandler(rowIndex, colIndex)}
                    className={styles.button}
                  />
                </div>
              )}
            </div>
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
