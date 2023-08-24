import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Login() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email || !password) {
            MySwal.fire(<h2>Los campos no deben estar vacios.</h2>);
            return;
        }

        if (!emailRegex.test(email)) {
            MySwal.fire(<h2>El formato del campo email es invalido.</h2>);
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            MySwal.fire(<h2>Datos incorrectos.</h2>);
            return;
        }

        axios.post("http://challenge-react.alkemy.org", { email, password }).then((res) => {
            MySwal.fire(<h3>Bienvenido!</h3>);
            sessionStorage.setItem("token", res.data.token);
            navigate("/listado");
        });
    };

    return (
        <>
            {token && <Navigate to="/listado" />}

            <h2>Formulario de Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Correo electronico:
                    <input type="email" name="email" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <button>Loguearse</button>
            </form>
        </>
    );
}

export default Login;
