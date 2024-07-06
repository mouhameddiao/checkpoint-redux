import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, updateTask } from '../tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description', task.description);
    if (newDescription) {
      dispatch(updateTask({ ...task, description: newDescription }));
    }
  };

  return (
    <div className={`task ${task.isDone ? 'completed' : ''}`}>
      <span>{task.description}</span>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
