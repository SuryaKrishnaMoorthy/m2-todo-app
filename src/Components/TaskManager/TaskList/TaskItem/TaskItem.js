import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const TaskItem = ({ task }) => {
	return (
			<ListGroupItem>
				{ task.title }
				<Button color="danger" className="float-right">Delete</Button>
				<Button color="primary" className="mr-1 float-right">Complete</Button>
			</ListGroupItem>
	)
}

export default TaskItem;