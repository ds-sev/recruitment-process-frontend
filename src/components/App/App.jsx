import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import VacanciesPage from '../VacanciesPage/VacanciesPage';
import VacancyPage from '../VacancyPage/VacancyPage';

import { vacancies } from '../../temp/vacancies';
import { candidates } from '../../temp/candidates';

import { NavMenu } from '../NavMenu/NavMenu';

import user from '../../temp/examples/user_example';

const App = () => {
  const handleMainSearch = (query) => {
    // eslint-disable-next-line no-console
    console.log(query);
  };
  return (
    <div className="app__container">
      <Header user={user} onSearch={handleMainSearch} />
      <NavMenu />
      <div className="app__content">
        <Routes>
          <Route
            path="vacancies"
            element={
              <VacanciesPage vacancies={vacancies} candidates={candidates} />
            }
          >
            <Route
              path="vacancy"
              element={<VacancyPage candidates={candidates} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
