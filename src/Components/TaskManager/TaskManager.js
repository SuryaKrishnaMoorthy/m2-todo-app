import React from 'react';
import TaskForm from './TaskForm/TaskForm';
import { Container, Row, Col } from 'reactstrap';

const TaskManager = () => {
	return (
		<Container>
			<Row>
				<Col>
					<TaskForm />
				</Col>
				<Col>
					<div>hi</div>
				</Col>
			</Row>
		</Container>
	)
}

export default TaskManager;