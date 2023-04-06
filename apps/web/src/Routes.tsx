
 

// TODO: I don't know if renaming `Routes` as `Router` is a good idea, because
// someone that is reading this code can be confused with BrowserRouter. So, I
// think that, in the future, this will be changed.
import { Routes , Route } from 'react-router-dom';


import { MainPage } from './modules/mainPage';

export const Router = () => (
  <Routes>
      <Route path="/" element={<MainPage />} />
  </Routes>
);