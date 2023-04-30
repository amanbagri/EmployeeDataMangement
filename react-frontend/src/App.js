import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';
import TrainingAndDevelopment from './components/TrainingAndDevelopment';
import LoginPage from './components/LoginPage';
import useToken from './components/useToken';
import Home from './components/Home';

function App() {
  const { token } = useToken();



  return (
    <Router>
      <Header />
      <div className="container">
      <Routes>

      {!token && <Route path="/login" element={<LoginPage  />} />}
      {token && (
        <>
         < Route path="/employee" element={<ListEmployeeComponents />} />
          <Route path="/add-employee/:id" element={<CreateEmployee />} />
          <Route path="/training-employee/" element={<TrainingAndDevelopment />} />
          <Route path="/view-employee/:id" element={<ViewEmployee />} />

        </>
      )}
          
          <Route path="/*" element={<Home/>} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
