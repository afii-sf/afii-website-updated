import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './About';
import Help from './Help';
import Home from './Home';
import Result from './Result';
import QuizInfo from './QuizInfo';
import Quiz from './Quiz';
import Explain from './Expain';
import Service from './Service';
import Info from './Info';
import FAQ from './FAQ';
import './index.css';

const App = () => {
  return(
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quizinfo" element={<QuizInfo />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service" element={<Service />} />
          <Route path="/info" element={<Info />} />
      </Routes>
  )
};

export default App;
