import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TaskForm = () => {
	return (
		<Form>
			<FormGroup>
				<Label for="title">Title</Label>
				<Input type="text" id="title"></Input>
			</FormGroup>
			<FormGroup>
				<Label for="description">Description </Label>
				<Input type="textarea" id="description"></Input>
			</FormGroup>
			<Button>Create</Button>
		</Form>
	)
}

export default TaskForm;