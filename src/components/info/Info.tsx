import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Coordinates } from '../../types/type';
import './info.scss';

export const Info = () => {
  const { activeCells } = useContext(Context);

  return (
    <div className="info-container">
      {activeCells.map((cell: Coordinates) => (
        <p
          key={`${cell.x}-${cell.y}`}
          className="info__text"
        >{`Row ${cell.x} Col ${cell.y}`}</p>
      ))}
    </div>
  );
};
