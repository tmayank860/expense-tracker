import './App.css';
import AddTransaction from './components/AddTransection';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransectionList';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
