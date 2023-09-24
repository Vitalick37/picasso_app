
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../shared/router';

function App() {
  return (
    <div className="App">
      <Routes>
        {routesConfig.map((e, index) => (
          <Route key={index} path={e.path} element={e.element}/>
        ))}

      </Routes>

    </div>
  );
}

export default App;
