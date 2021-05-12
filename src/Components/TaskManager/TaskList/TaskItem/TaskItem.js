import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const TaskItem = ({ task }) => {
	return (
			<ListGroupItem>
				{ item }
				<Button color="primary">Complete</Button>
				<Button color="danger">Delete</Button>
			</ListGroupItem>
	)
}

export default TaskItem;