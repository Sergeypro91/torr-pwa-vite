// import style from './styles.module.css';

import { useState } from 'react';

const initialData = [
  { key: 'first' },
  { key: 'second' },
  { key: 'third' },
  { key: 'four' },
  { key: 'five' },
];

export const Search = () => {
  const [isMove, setIsMove] = useState(false);
  const [dataArr, setDataArr] = useState(initialData);

  const moveDown = (id: number) => {
    setIsMove(true);

    if (!isMove && id < dataArr.length - 1) {
      setDataArr((prevState) =>
        prevState.toSpliced(id, 2, prevState[id + 1], prevState[id]),
      );

      const timeout = setTimeout(() => {
        moveDown(id + 1);
        clearTimeout(timeout);
      }, 300);

      return null;
    }

    setIsMove(false);
  };

  return (
    <ul>
      {dataArr.map((li, id) => {
        return (
          <li key={id}>
            {`${li.key} `}
            <button onClick={() => moveDown(id)}>DOWN</button>
          </li>
        );
      })}
    </ul>
  );
};
