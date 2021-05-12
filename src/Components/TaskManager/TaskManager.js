import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const TaskManager = () => {
	return (
		<Container>
			<Row>
				<Col>
					<TaskForm />
				</Col>
				<Col>
					<TaskList />
				</Col>
			</Row>
		</Container>
	)
}

export default TaskManager;