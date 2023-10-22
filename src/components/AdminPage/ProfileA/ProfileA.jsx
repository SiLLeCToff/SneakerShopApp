import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../../store/authSlice";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileA() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRedirectMain = () => {
    navigate("/");
  };
  const handleLogout = async (e) => {
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex w-auto hover:transition-all transition-all items-center p-1 justify-between 2xl:gap-3 rounded-full cursor-pointer">
        <span className="sr-only">Open options</span>
        <div className="flex rounded-full bg-gray-500 w-10 h-10"></div>
        <div className=" hidden xl:flex">Исаев Руслан</div>
        <KeyboardArrowDownRoundedIcon />
      </Menu.Button>
      <div>
        {/* <Menu.Button className="flex items-center rounded-md  hover:text-gray-600 ">
          <span className="sr-only">Open options</span>
          <UserCircleIcon
            className=" p-1 rounded-md cursor-pointer hover:bg-gray-100 hover:bg-opacity-80 w-9"
            aria-hidden="true"
          />
        </Menu.Button> */}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <form>
              <Menu.Item>
                {({ active }) => (
                  <button
                    href="#"
                    className={classNames(
                      active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm bg-white"
                    )}
                  >
                    Настройки
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    href="#"
                    className={classNames(
                      active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm bg-white"
                    )}
                  >
                    Поддержка
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => handleRedirectMain(e)}
                    className={classNames(
                      active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                      "block px-4 w-full text-left py-2 text-sm bg-white"
                    )}
                  >
                    Перейти на сайт
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => handleLogout(e)}
                    className={classNames(
                      active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm bg-white"
                    )}
                  >
                    Выход
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
