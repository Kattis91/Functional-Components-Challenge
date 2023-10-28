import css from './App.module.css';
import ContentAPIHooks from './components/ContentAPIHooks';
// import ContentHooks from './components/ ContentHooks';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';
// import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple.js /> */}
      {/* <NavBarForm /> */}
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;