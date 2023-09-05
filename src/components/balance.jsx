import { useGlobalState } from "../context/globalState"

function Balance(){

    const {transactions} = useGlobalState();
    const amounts = transactions.map(transactions => transactions.amount)
    const total = amounts.reduce((acc, item) => (acc+= item), 0).toFixed(2)

    return(
        <div className="flex justify-between">
            <h2 className="font-bold">SALDO ACTUAL</h2>
            <h2 className="text-2xl font-mono">${total}</h2>
        </div>
    )
}

export default Balance;