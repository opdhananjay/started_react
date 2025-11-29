import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <h2>My Application</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}