import './App.css';

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Header, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
