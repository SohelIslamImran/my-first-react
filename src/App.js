import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then((res) => res.json())
            .then((data) => setUsers(data.data));
    }, []);
    return (
        <div className="App">
            <h1 className="text-center my-5">Fake Users</h1>
            <div className="container my-5">
                <div className="row row-cols-3 d-flex justify-content-between">
                    {users.map((user) => (
                        <div className="col my-4" key={user.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={user.avatar} />
                                <Card.Body>
                                    <Card.Title>
                                        {user.first_name} {user.last_name}
                                    </Card.Title>
                                    <Card.Text>{user.email}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
