import { useContext } from 'react';
import './App.scss';
import { Modes } from './components/dropdown';
import { Field } from './components/field';
import { Info } from './components/info/Info';
import { Context } from './context/Context';

export const App = () => {
  const { isStarted } = useContext(Context);
  return (
    <div className="app-container">
      <h1 className="main__title">StarNavi test task</h1>
      <div className="main">
        <div className="field-container">
          <Modes />
          <Field />
        </div>

        {isStarted && (
          <div className="main-container">
            <h1>Hover squares</h1>
            <Info />
          </div>
        )}
      </div>
    </div>
  );
};
