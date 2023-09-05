import {GlobalProvider}  from './context/globalState';

import Header from './components/Header';
import Balance from './components/balance';
import Transaccion from './components/transactions/transaccion';
import TransactionList from './components/transactions/TransactionList';
import IncomesExpenses from './components/transactions/incomesExpenses';
import Graphics from './components/Graphics';

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950	 text-white h-screen flex justify-center items-center'>
       <div className='w-2/5 flex justify-center items-center'>
        <div className='bg-zinc-800 p-10 rounded-lg flex w-full'>
            <div>
              <Header/>
              <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='flex-2'>
                  <IncomesExpenses/>  
                  <Balance/>
                  <Transaccion/>
                </div>
                <div className='flex-1 flex flex-col'>
                  <Graphics/>
                  <TransactionList/>
                </div>
              </div>
            </div>        
          </div>
       </div>
      </div>
    </GlobalProvider>
  );
}
export default App