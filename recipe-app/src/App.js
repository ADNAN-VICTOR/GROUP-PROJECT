import './App.css';
import FoodCollection from './components/FoodCollection';
import SearchBar from './components/SearchBar';
import { Form } from './components/Navbar';
function App() {
  return (
    <div>
      
      <SearchBar />
      <Form/>
      <FoodCollection/>
    </div>
  );
}

export default App;
