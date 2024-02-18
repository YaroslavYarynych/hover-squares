import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Cell } from '../cell';
import { Mode } from '../../types/type';
import './field.scss';

export const Field = () => {
  const { modes, value, isStarted } = useContext(Context);

  const findMode = modes.find((mode: Mode) => mode.name === value);

  const tableGenerator = (num: number) => {
    const table = [];

    for (let row = 0; row < num; row++) {
      const rowArray = [];

      for (let col = 0; col < num; col++) {
        rowArray.push(
          <Cell coordinates={{ x: row, y: col }} key={`${col}-${row}`} />,
        );
      }

      table.push(
        <div className="field__row" key={row}>
          {rowArray.map((item) => item)}
        </div>,
      );
    }

    return table;
  };

  return (
    <div className="field">
      {isStarted && <div>{tableGenerator(findMode.field)}</div>}
    </div>
  );
};
