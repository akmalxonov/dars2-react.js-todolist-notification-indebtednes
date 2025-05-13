    import { Button } from 'antd';
    import "../card/card.scss"
    import { paidData,unpaidData } from '../../redux/indebtedness-slice';
    import { useDispatch } from 'react-redux';
    const Card = ({id ,text,number}) => {
        const dispatch = useDispatch()
        return (
            <div className='card'>
                <p>{text}</p>
                <p>{number}</p>
                <div className="btns">
                    <Button variant="outlined" color="danger" onClick={()=>dispatch(unpaidData(id))} className='btn'>tolanmadi</Button>
                    <Button variant="outlined" color="green" onClick={()=>dispatch(paidData(id))} className='btn'>tolandi</Button>
                </div>
            </div>
        );
    }

    export default Card;
