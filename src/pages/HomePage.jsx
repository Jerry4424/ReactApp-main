import { Link, useNavigate } from "react-router-dom";
import Hobbies from "../components/Hobbies";
import BasicExample from "../pages/BasicExample"; // Import the navigation bar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';

export default function HomePage() {

    const navigate = useNavigate();
    const data = { fname: "John", lname: "Thomas" };

    function handleLogin() {
        navigate('/about', { state: data });
    }

    const variant = "primary";

    return (
        <>
            {/* Use the navigation bar from BasicExample */}
            <BasicExample />

            <h1>This is the Homepage</h1>
            
            <button onClick={handleLogin}>Login</button>

            <Hobbies />

            <Link to="/about">Go to Aboutpage</Link>   
            
            <Button variant="primary">Hello jj</Button>
            <Button variant="outline-primary">Primary</Button>

            <Alert key={variant} variant={variant}>
                This is a {variant} alert—check it out!
            </Alert>
        </>
    );
}