import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import ViewPayments from './components/ViewPayments/ViewPayments';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/viewPayments' element={<ViewPayments />} />
      </Routes>
    </div>
  );
}

export default App;
