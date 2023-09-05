import {useGlobalState} from "../../context/globalState"

export function TransactionOrder({transaction}){
    const {deleteTransaction} = useGlobalState();
    return(
                <li className="bg-zinc-600 text-white px-2 
                py-1 rounded-lg mb-2 w-full flex justify-between items-center
                ">
                <p className="font-mono text-sm">{transaction.description}</p>
                <span className="font-mono text-sm"> ${transaction.amount}</span>
                <button onClick={() => {
                deleteTransaction(transaction.id);
                }}
                className="bg-red-800 hover:bg-red-500 text-white font-bold  px-2 rounded font-mono">
                X</button>
        </li>
    )
}

export default TransactionOrder;