import logo from './logo.svg';
import './App.css';
import HouseInput from './components/form';
import ViewTable from './components/table';

function App() {

  //   function addHouse(newHouseData){
  //     const newHouse = {id: nextId++, ...newHouseData}

  //     setHouseList(houseList.concat(newHouse));
  // }   Trying to add a new house to the house list

  return (
    <div className="App">
      <HouseInput /*onSubmint={addHouse}*//>
      <ViewTable/>
    </div>
  );
  }

export default App;
