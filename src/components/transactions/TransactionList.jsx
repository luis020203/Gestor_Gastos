import { useGlobalState } from "../../context/globalState";
import {TransactionOrder} from "./TransactionOrder"

function TransactionList(){
    const {transactions} = useGlobalState()

    return(
        <div className="bg-zinc-900 py-1 px-3 mb-2 rounded-lg">
            <h3 className='font-bold'>HISTORIAL</h3>
            <div className="max-h-[150px] overflow-y-auto">
                <ul>
                    {transactions.map((transaction) => (
                        <TransactionOrder transaction={transaction} key=
                        {transaction.id} />
                    ))}
                </ul>
            </div>
           
        </div>
    );
}

export default TransactionList