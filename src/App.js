import Styles from './App.module.css'
import Header from './Components/Header'
import Search from './Components/Search'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Footer from './Components/Footer'
function App() {
  return (
    <div className={Styles.app}>
      <div className={Styles.topsection}>

        <div className={Styles.dark_background}>
          <Header/>  
          <Search/>
        </div>
      </div>
      <Section1/>
      <Section2/>
      <Footer/>
      <hr/>
    </div>
  );
}

export default App;
