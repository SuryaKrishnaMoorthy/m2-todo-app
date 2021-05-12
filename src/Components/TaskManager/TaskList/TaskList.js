import React from 'react';
import { ListGroup } from 'reactstrap';

import TaskItem from './TaskItem/TaskItem';
import Task from '../../../models/Task';

const TaskList = () => {
	const tasks = [
		new Task(1, "Learn React"),
		new Task(2, "Learn Algorithms"),
		new Task(3, "Learn Node"),
		new Task(4, "Learn Testing"),
		new Task(5, "Learn GraphQL")
	];

	tasks.map(task => console.log(task) )
	

	return (
		<ListGroup>
			{ tasks.map(task => <TaskItem key={task.id} task={task}/>)}
		</ListGroup>
	)
}

export default TaskList;