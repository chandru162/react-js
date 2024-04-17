import React, { useMemo, useState } from "react";

export default function Count_usememo() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000000000) {
      {
        i++;
      }
      return count1 % 2 === 0;
    }
  });

  return (
    <div>
      {isEven ? "Even" : "Odd"}
      <button
        onClick={() => {
          setcount1(count1 + 1);
        }}
      >
        Count1 {count1}
      </button>
      <button
        onClick={() => {
          setcount2(count2 + 1);
        }}
      >
        Count2 {count2}
      </button>
    </div>
  );
}
