import { useContext, useEffect } from 'react';
import axios from 'axios';
import './Modes.scss';
import { Context } from '../../context/Context';
import { Mode } from '../../types/type';

export const Modes = () => {
  const {
    modes,
    setModes,
    setValue,
    setError,
    error,
    isStarted,
    setIsStarted,
    setActiveCells,
    value,
  } = useContext(Context);

  useEffect(() => {
    axios
      .get('https://60816d9073292b0017cdd833.mockapi.io/modes')
      .then((res) => {
        if (res.data.length) {
          setModes(res.data);
        }
      })
      .catch((error) => setError(error));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event?.target.value);
    setError('');
    setActiveCells([]);
  };

  const handleClick = () => {
    if (!value || value === 'null') {
      setError('Choose an option');
      return;
    }

    setIsStarted((current: boolean) => {
      if (current) {
        setActiveCells([]);
        setValue('null');
      }

      return !current;
    });
  };

  return (
    <div className="select">
      <div className="select__container">
        <select
          name="modes"
          className="select__dropdown"
          id="modes"
          value={value}
          onChange={handleChange}
          defaultValue="null"
        >
          <option value="null" disabled={value !== 'null'}>
            Pick a mode
          </option>
          {modes.map((mode: Mode) => (
            <option key={Math.round(Math.random() * 10000)} value={mode.name}>
              {mode.name}
            </option>
          ))}
        </select>

        <button onClick={handleClick} type="button" className="select__btn">
          {isStarted ? 'Stop' : 'Start'}
        </button>

        {error && <p className="select__error">{error}</p>}
      </div>
    </div>
  );
};
