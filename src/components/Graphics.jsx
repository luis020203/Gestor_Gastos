import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/globalState';
import { BsPieChartFill } from "react-icons/bs";


function Graphics(){
    const{transactions} =useGlobalState()

    const total = transactions.reduce((acc, transaction)=> (acc+=transaction.amount),0);
    
    const totalIncome = transactions.filter(transaction => transaction.amount > 0)
                                    .reduce((acc, transaction)=> (acc += transaction.amount),0);

    const totalExpense = transactions.filter(transaction => transaction.amount < 0)
                                    .reduce((acc, transaction)=> (acc += transaction.amount),0) * -1;

    const expensePercentage = Math.round((totalExpense / totalIncome) *100);
    const incomePercentage = 100 - expensePercentage;

    if (totalIncome === 0 && totalExpense === 0){
        return(
            <div className='bg-zinc-800 p-4 my-2'>
                <div className='h-full flex items-center justify-center w-full flex-col'>
                    <BsPieChartFill className='text-9x1'/>
                    <h1 className='font-mono my-2'>No data Found</h1>
                </div>
            </div>
        );

    }

    //console.log(total)
    //console.log(totalIncome)
    //console.log(totalExpense)
    //console.log(expensePercentage)
    //console.log(incomePercentage)

    
    return(
        <div>
            <VictoryPie
                colorScale={["#DC143C","#00FA9A"]}
                data={[
                    {x: "Gastos", y: expensePercentage},
                    {x: "Ingresos", y: incomePercentage}
                ]}
                animate={{
                    duration : 0,
                }}
                labels={({datum}) => `${datum.y}%`}
                labelComponent={
                    <VictoryLabel
                        angle = {45}
                        style = {{
                            fill: "white",
                    }}
                />       
            }
            /> 
        </div>
        
    )
}

export default Graphics;