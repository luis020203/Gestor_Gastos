import { useGlobalState } from "../../context/globalState"

function IncomesExpenses(){

    const {transactions} = useGlobalState();
const amounts = transactions.map(transaction => transaction.amount);

const income = amounts.filter(item => item > 0)
                      .reduce((acc, item) => (acc += item),0)
                      .toFixed(2);

const expenses= amounts.filter(item => item <0)
                       .reduce((acc, item) => acc += item ,0)
                       .toFixed(2)*-1;
    return(
        <>
       <div className="flex justify-between my-2">
        <h4 className="font-semibold">INGRESOS</h4>
        <p className="font-mono">{income}</p>
       </div>
       <div className="flex justify-between my-2">
        <h4 className="font-semibold">GASTOS</h4>
        <p className="font-mono">{expenses}</p>
       </div>
       </>
    )
}

export default IncomesExpenses