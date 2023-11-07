import {useLocation, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loginUser, registrationUser} from "../store/AuthActions";
import { useState } from "react";

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkValidDataHandler = async (e) => {
    e.preventDefault();

    try {
      // Диспетчеризуйте действие loginUser
      const response = await dispatch(loginUser(email, password));
    } catch (error) {
      console.error(
        "Authentication error:",
        error.response?.data?.error || "Неизвестная ошибка"
      );
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Диспетчеризуйте действие loginUser
      const response = await dispatch(registrationUser(email, password));
    } catch (error) {
      console.error(
          "Authentication error:",
          error.response?.data?.error || "Неизвестная ошибка"
      );
    }
  };



  const login = location.pathname === "/login" ? true : false;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {login ? "Войдите в ваш аккаунт" : "Зарегистрируйтесь"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {login ? (
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Почта
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 text-center py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Пароль
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0  py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-900"
                    >
                      Запомнить?
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a
                      href="/registration"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Зарегистрироваться
                    </a>
                  </div>
                </div>

                <div className="flex items-center flex-col">
                  <button
                    onClick={(e) => checkValidDataHandler(e)}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Войти
                  </button>

                  <button
                      onClick={() => navigate("/")}
                      className="flex w-[50%] mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    На Главную
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" action="/" method="POST">
                <div>
                  <label

                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Почта
                  </label>
                  <div className="mt-2">
                    <input
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 text-center py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label

                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Пароль
                  </label>
                  <div className="mt-2">
                    <input
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0  py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <button
                      onClick={(e) => handleRegistration(e)}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Зарегистрироваться
                  </button>
                  <button
                      onClick={() => navigate("/")}
                      className="flex w-[50%] mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    На Главную
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
