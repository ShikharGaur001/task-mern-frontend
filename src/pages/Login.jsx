import { FaSignInAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../redux/auth/auth.slice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <section className="mt-10 w-screen gap-2 flex justify-center items-center flex-col">
        <h1 className="flex gap-2 items-center tracking-tight text-4xl">
          <FaSignInAlt /> Login
        </h1>
        <p className="text-2xl text-zinc-500">Login and start creating tasks</p>
      </section>
      <section className="w-screen mt-10">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="email"
            className="w-1/3 px-3 py-2 rounded-lg border-2"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <input
            type="password"
            className="w-1/3 px-3 py-2 rounded-lg border-2"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
          <button
            type="submit"
            className="w-1/3 px-3 py-2 rounded-lg bg-black text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
export default Login;
