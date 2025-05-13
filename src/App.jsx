import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification, hideNotification } from './redux/notification-clice';
import TodoList from './components/todu-List';
import Timer from './components/timer';

const App = () => {
  const { show, message, type } = useSelector((state) => state.notificationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);






  return (
    <div className='container'>
      <TodoList />



      <div className="wrapper1">
        {show && (
          <div className={`notification ${type}`}>
            <p>{message}</p>
            <p onClick={() => dispatch(hideNotification())}>x</p>
          </div>
        )}
        <button className='button' onClick={() => dispatch(showNotification({ message: 'salom', type: 'success' }))}>show</button>
      </div>


      <Timer/>
    </div>
  );
}

export default App;