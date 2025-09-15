import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'
import { registerUser } from "../services/authentication";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await registerUser({ firstName, lastName, email, password });
            navigate("/login");
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register bg-light ">
            <div className="nav-header">
                 {/* <Link to="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
                        className="header-logo"
                        alt="EMS"
                    />
                </Link>  */}
            </div>

            <div className="register-cont d-flex align-items-center justify-content-center flex-grow-1">
                <div className="container">
                    <form
                        className="bg-white p-4 rounded shadow"
                        id="registrationForm"
                        onSubmit={handleSubmit}
                        style={{ maxWidth: 500, margin: "auto" }}
                    >
                        <h2 className="text-center fw-bold mb-4">Welcome to EMS</h2>

                        {error && (
                            <div className="alert alert-danger text-center" role="alert">
                                {error}
                            </div>
                        )}

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label fs-6" htmlFor="firstName">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fs-6" htmlFor="lastName">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fs-6" htmlFor="email">
                                Email address
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fs-6" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fs-6" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <button type="submit" className="btn btn-success w-50">
                                Register
                            </button>
                        </div>

                        <div className="text-center">
                            <p>
                                Already a member? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}