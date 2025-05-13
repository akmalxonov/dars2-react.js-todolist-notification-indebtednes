import React from 'react';
import "../unpaid/paid.scss"
import { deleteTodo } from '../../redux/indebtedness-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
const Unpaid = ({ id, text, number }) => {
    const dispatch = useDispatch()
    const { dataU } = useSelector((state) => state.indebtednessReducer || []);
     const totalPrice = dataU.reduce(
        (acc, value) => acc + Number(value.number || 0),0
    );  
    return (
        <div className='paid'>
            <div className="price">
                <h2>Jami tolanmaganlar</h2>
                <h2>{totalPrice.toLocaleString() || 0}so'm</h2>
            </div>
            {dataU.length === 0 ? (
                <p>Hozircha hech qancha tolanmaganlar yoq</p>
            ) : (
                dataU.map((value) => (
                    <div className='card' key={value.id}>
                        <p>{value.text}</p>
                        <p>{(value.number.toLocaleString())}</p>
                    </div>
                ))
            )}
        </div >
    );
}

export default Unpaid;
