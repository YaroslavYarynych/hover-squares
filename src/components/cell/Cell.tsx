import { useContext } from 'react';
import { Context } from '../../context/Context';
import classNames from 'classnames';
import { Coordinates } from '../../types/type';
import './cell.scss';

type Props = {
  coordinates: Coordinates;
};

export const Cell: React.FC<Props> = ({ coordinates }) => {
  const { activeCells, setActiveCells } = useContext(Context);

  const activeCell = activeCells.find(
    (cell: Coordinates) => cell.x === coordinates.x && cell.y === coordinates.y,
  );

  const handleHoverEffect = () => {
    if (activeCell) {
      setActiveCells((cell: Coordinates[]) =>
        cell.filter(
          (item) => !(item.x === coordinates.x && item.y === coordinates.y),
        ),
      );
    } else {
      setActiveCells((currentCell: Coordinates[]) => [
        ...currentCell,
        coordinates,
      ]);
    }
  };
  return (
    <div
      className={classNames('cell', {
        'is-active': activeCell,
      })}
      onMouseEnter={handleHoverEffect}
    />
  );
};
