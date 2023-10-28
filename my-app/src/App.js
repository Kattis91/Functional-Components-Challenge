import css from './App.module.css';
import ContentHooks from './components/ ContentHooks';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple.js /> */}
      {/* <NavBarForm /> */}
      {/* <Content /> */}
      <ContentHooks />
    </div>
  );
}

export default App;