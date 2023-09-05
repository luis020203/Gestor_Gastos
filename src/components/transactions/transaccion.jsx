import { useState } from "react";
import { useGlobalState } from "../../context/globalState"

function Transaccion(){

    const {addTransaction} = useGlobalState()

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount,
        });
        setAmount(0);
        setDescription('');
    }

    return(

        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Detalle"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full font-mono"
                value={description}/>

                <input type="number" step={0.01} placeholder="00.00"
                onChange={(e) => setAmount(e.target.value)}
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full font-mono"
                value={amount}/>

                <button className="bg-transparent hover:bg-emerald-500 text-white font-bold hover:text-white py-2 px-4 border border-emerald-800 hover:border-transparent rounded-lg">Añadir</button>

            </form>
        </div>
    )
}

export default Transaccion