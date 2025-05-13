import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import Card from '../card';
import "../todu-List/todo.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/indebtedness-slice';
import Paid from '../paid';
import Unpaid from '../unpaid';
const TodoList = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.indebtednessReducer);
    const [form] = Form.useForm(); 

    const submit = (e) => {
        dispatch(getData(e)); 
        console.log(e);
         e.number = Number(e.number);   
        form.resetFields();       
    };
    
    return (
        <div className='all'>
            <Unpaid/>
            <div className="wrapper2">
                <div className="wrapper">
                    <Form form={form} onFinish={submit} className='form'>
                        <Form.Item
                            className='input'
                            name={"text"}
                            rules={[{ required: true, message: "name ?!" }]}
                        >
                            <Input className='input' placeholder='text' />
                        </Form.Item>
                        <Form.Item
                            className='input'
                            name={"number"}
                            rules={[{ required: true, message: "how much !?" }]}
                        >
                            <InputNumber className='input'  placeholder='number' />
                        </Form.Item>
                        <Button htmlType='submit'>add</Button>
                    </Form>
                </div>

                <div className="list">
                    {data.map((value) => (
                        <Card key={value.id} {...value} />
                    ))}
                </div>
            </div>
            <Paid/>
        </div>
    );
}

export default TodoList;
