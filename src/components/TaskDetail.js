import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const TaskDetail = ({getItem, task}) => {
  const match = useRouteMatch();
  const id = match.params.id;
  console.log(task);
  useEffect(()=> {
    getItem(id)
  }, [id]);

  return (
    <>
    {task && 
      <div>
        <h1>{task.name}</h1>
        <span className="detail-task">Chi tiết công việc: </span>
        <p>{task.description}</p>
        <span className="status-task">Trạng thái công việc : </span>
        <span className={task.status === true ? "badge badge-success" : "badge badge-danger"}>
                            {task.status === true ? ' Kích hoạt' : ' Ẩn'}
        </span>
        <img className="image-task" src={task.imageTodo} alt={task.imageTodo.name} />
      </div>}
      <br></br>
      <Link to="/">
        <button type="button" className="btn btn-info">
          <span className="fa fa-long-arrow-left"></span> Quay về trang chủ
        </button>
      </Link>
    </>
  )
}

export default TaskDetail;