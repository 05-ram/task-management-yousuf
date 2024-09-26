import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="task__app-management">
            <div className="app-title text-center fw-semibold">Task Management App</div>
            <AddTask />
            <TaskList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
