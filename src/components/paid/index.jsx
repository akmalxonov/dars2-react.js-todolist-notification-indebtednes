import React from 'react';
import "../paid/paid.scss"
import { deleteTodo } from '../../redux/indebtedness-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
const Paid = () => {
    const dispatch = useDispatch()
    const { dataP } = useSelector((state) => state.indebtednessReducer || []);
    const totalPrice = dataP.reduce(
        (acc, value) => acc + Number(value.number || 0),0
    );  
    return (
        <div className='paid'>
            <div className="price">
                <h2>Jami tolanganlar</h2>
                <h2>{totalPrice.toLocaleString() || 0}so'm</h2>
            </div>
            {dataP.length === 0 ? (
                <p>Hozircha hech qancha tolanganlar yoq</p>
            ) : (
                dataP.map((value) => (
                    <div className='card' key={value.id}>
                        <p>{value.text}</p>
                        <p>{(value.number || 0).toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Paid;
