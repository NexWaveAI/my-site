
import './components/styles/Header.css'
import TopFooter from './components/ui/TopFooter';
import TopHeader from './components/ui/TopHeader';
import './components/styles/Footer.css';
import Tabs from './components/ui/Body';
import Footer from './components/ui/Footer';
import './components/styles/TopFooter.css';
import './components/styles/Account.css'
import "./components/styles/App.css"


function App() {
  return (
   
    <div >
         <TopHeader />
         <Tabs />
         <TopFooter />
         <Footer />
    </div>
  );
}

export default App;
