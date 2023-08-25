import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, expenses, currency, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (val)=>{
        if(val < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending: " + currency + totalExpenses);
            return
        }
        if(val > 20000) {
            const remaining = budget - totalExpenses;
            alert("The value cannot exceed remainig funds " + currency + remaining);
            return
        }  
            dispatch({
                type: 'CHG_BUDGET',
                payload: val,
            })
    }    
    return (
        <div className='alert alert-secondary'>
            <>Budget:  {currency}</>
            <input
                required='required'
                type='number' min={10} step="10"  
                id={budget}
                value={budget}
                style={{ marginLeft: '.4rem' , width:'8rem'}}
                onChange={(event) => changeBudget(event.target.value)}>
            </input>

        </div>
    );
};
export default Budget;
