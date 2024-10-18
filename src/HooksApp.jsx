import { useState } from 'react';
import { CounterApp, CounterWithCustomHook } from './01-useState';
import { FormWithCustomHook, SimpleForm } from './02-useEffect';
import { MultipleCustomHook } from './03-examples';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize, MemoHook, CallbackHook } from './06-memos';
import { Padre } from './07-tarea-memo/Padre'
import { NavButtonItem } from './components/NavButtonItem';

const vistas = [
  'Counter App',
  'Counter With Custom Hook',
  'Simple Form',
  'Form With Custom Hook',
  'Multiple Custom Hook',
  'Focus Screen',
  'Layout',
  'Memorize',
  'Memo Hook',
  'Callback Hook',
  'Tarea Memo'
]

export const HooksApp = () => {

  const [route, setRoute] = useState(0);

  const onClickFun = (value) => {
    setRoute(value);
  }

  const renderComponent = () => {
    switch (route) {
      case 0:
        return <CounterApp />;
      case 1:
        return <CounterWithCustomHook />;
      case 2:
        return <SimpleForm />;
      case 3:
        return <FormWithCustomHook />;
      case 4:
        return <MultipleCustomHook />;
      case 5:
        return <FocusScreen />;
      case 6:
        return <Layout />;
      case 7:
        return <Memorize />;
      case 8:
        return <MemoHook />;
      case 9:
        return <CallbackHook />;
      case 10:
        return <Padre />;
      default:
        return <CounterApp />;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hooks App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
              {
                vistas.map((vista, index) => (
                  <li key={vista.trim()} className="nav-item">
                    <NavButtonItem key={vista.trim()} active={route === index} onClick={ onClickFun } text={vista} val={index} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container">
        { renderComponent() }
      </div>
    </>
  )
}
