import {Fragment, useEffect, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SelectMenu from "./SelectMenu/SelectMenu";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../../../../store/BrandActions";
import axios from "axios";
import {getAllSneakers} from "../../../../../store/SneakersActions.jsx";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {imageDB} from "../../../../../Firebase/firebase.jsx";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export default function ModalWindow({ open, setOpen }) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand);
  const [addItemOpen, setAddItemOpen] = useState(false)
  const [addBrandOpen, setAddBrandOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(true)
  const handleClickAddItem = () => {
    if(!addItemOpen) {
      setMenuSelected(false)
      setAddItemOpen(true)
    } else
    {
      setMenuSelected(true)
      setAddItemOpen(false)
    }
  }


  const handleClickAddBrand = () => {
    if(!addBrandOpen) {
      setMenuSelected(false)
      setAddBrandOpen(true)
    } else
    {
      setMenuSelected(true)
      setAddBrandOpen(false)
    }
  }


  useEffect(() => {
    if(open === false) {
      setAddItemOpen(false)
      setAddBrandOpen(false)
      setMenuSelected(true)

    }
  }, [open]);



  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const initialInputStates = {
    38: 0,
    39: 0,
    40: 0,
    41: 0,
    42: 0,
    43: 0,
    44: 0,
    45: 0,
  };

  const [inputStates, setInputStates] = useState(initialInputStates);
  const sizes = [
    { size: 38, quantity: inputStates[38] },
    { size: 39, quantity: inputStates[39] },
    { size: 40, quantity: inputStates[40] },
    { size: 41, quantity: inputStates[41] },
    { size: 42, quantity: inputStates[42] },
    { size: 43, quantity: inputStates[43] },
    { size: 44, quantity: inputStates[44] },
    { size: 45, quantity: inputStates[45] },
  ];


  const sizesJSON = JSON.stringify(sizes);

  const [imageURL, setImageURL] = useState(null);
  const [file, setFile] = useState('');
  const [idBrand, setIdBrand] = useState(1);

  const handleBrandSelect = (selectedBrand) => {
    setIdBrand(selectedBrand.id);
  };



  const addNewSneaker = async () => {
    try {
      const formData = new FormData(); // selectedFile - это ваш объект File
      formData.append("name", name);
      formData.append("price", `${price}`);
      formData.append("brandId", `${idBrand}`);
      // formData.append("img", file);
      formData.append("sizes", sizesJSON);

      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${apiUrl}api/snacker`,
        // {
        //   name: name,
        //   price: price,
        //   brandId: idBrand,
        //   img: file,
        // },
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const imgRef = ref(imageDB, `files/${name}`)
        uploadBytes(imgRef, file)
        console.log('Успешно');
      }
    } catch (error) {
      console.error("Не удалось добавить товар:", error);
    } finally {
      setOpen(false);
      getAllBrands(dispatch)
      getAllSneakers(dispatch)
    }
  };

  const addNewBrand = async () => {
    try {
      const formData = new FormData(); // selectedFile - это ваш объект File
      formData.append("name", brand);
      const token = localStorage.getItem("token");
      const response = await axios.post(
          `${apiUrl}api/brand`,
          // {
          //   name: name,
          //   price: price,
          //   brandId: idBrand,
          //   img: file,
          // },
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      if (response === 200) {
        console.log(Успешно);
      }
    } catch (error) {
      console.error("Не удалось добавить бренд:", error);
    } finally {
      setOpen(false);
      getAllBrands(dispatch)
      getAllSneakers(dispatch)
    }
  };
  const test = () => {

    setMenuSelected(true)
    setAddItemOpen(false)
    setOpen(false);

  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result); // Показываем превью изображения, если нужно
        setFile(selectedFile); // Устанавливаем файл в состоянии
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClose = () => {

    setOpen(false);
    setMenuSelected(true)
    setAddItemOpen(false)
    setImageURL(null);
    setFile(null);
    return false
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={(e)=> test}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black backdrop-filter backdrop-blur-sm bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white bg-opacity-100 px-4 pb-4  text-left shadow-xl transition-all sm:my-8 sm:w-full  2xl:h-[550px] md:h-[500px] md:w-50%  sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block ">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {menuSelected && <div className="flex w-full justify-between h-[450px] items-center ">
                  <div
                      onClick={handleClickAddBrand}
                      className="flex w-[44%] items-center justify-start flex-col bg-white rounded-3xl cursor-pointer  transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img src="src/images/new-balance-2.svg" alt='logoBrand'
                         className="flex w-full rounded-3xl h-[300px] bg-cover "/>
                    <p className="font-medium text-3xl">Бренд</p>
                  </div>
                  <div
                      onClick={handleClickAddItem}
                      className="flex w-[44%] items-center justify-start flex-col bg-white rounded-3xl cursor-pointer  transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img src="src/images/addItem.png" alt='logoBrand' className="flex w-full h-[300px]  rounded-3xl  bg-cover object-contain"/>
                    <p className="font-medium text-3xl mt-[20px]">Товар</p>
                  </div>

                </div>}
                {addItemOpen && <div className="sm:flex sm:items-center sm:justify-center ">
                  <div className="mt-3 flex flex-col  text-center sm:ml-4 sm:mt-0 sm:text-center">
                    <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Добавление Товара
                    </Dialog.Title>
                    {/* <div className=" mt-2 h-200px w-300px bg-red-200"></div> */}
                    {imageURL ? (
                        <img
                            src={imageURL}
                            alt="Uploaded"
                            className="mt-2 mx-auto rounded-lg"
                        />
                    ) : (
                        <div className="mt-2">
                          <input
                              type="file"
                              onChange={handleFileChange}
                              accept="image/*"
                              name="img"
                          />
                        </div>
                    )}
                    <p className="w-full pl-2 flex text-sm font-light">Бренд</p>
                    <SelectMenu onBrandSelect={handleBrandSelect}/>
                    <p className="w-full pl-2 flex text-sm font-light">
                      Название модели
                    </p>
                    <input
                        type="text"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Название"
                        className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
                    />
                    <p className="w-full pl-2 flex text-sm font-light">Цена</p>
                    <input
                        type="number"
                        placeholder="Сумма"
                        onChange={(e) => setPrice(e.currentTarget.value)}
                        className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
                    />
                    <div>
                      <h2 className="flex py-4">Количество товара в наличии</h2>
                    </div>
                    <div  className="flex w-full items-center justify-start gap-4 flex-wrap">
                      {sizes.map((item, index) => <div key={index} className="flex justify-center items-center gap-1">
                        <p className="pl-2 flex text-sm font-light">{item.size}</p>
                        <input
                            type="number"
                            placeholder="Размер"
                            value={inputStates[item.size]}
                            onChange={(e) => {
                              const newSize = parseInt(e.target.value);
                              setInputStates((prevInputStates) => ({
                                ...prevInputStates,
                                [item.size]: isNaN(newSize) ? 0 : newSize,
                              }));
                            }}
                            min="0"
                            className="py-1 pl-2 flex w-[65px] border border-stone-200 rounded-lg text-sm font-normal box-content"
                        />
                      </div>)}
                    </div>
                  </div>
                </div>}

                {addItemOpen && <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={addNewSneaker}
                  >
                    Добавить Товар
                  </button>
                  <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleClose}
                  >
                    Отмена
                  </button>
                </div>}

                {addBrandOpen && <div className="sm:flex sm:items-center sm:justify-center ">
                  <div className="mt-3 flex flex-col  text-center sm:ml-4 sm:mt-0 sm:text-center">
                    <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Добавление Бренда
                    </Dialog.Title>

                    <p className="w-full pl-2 flex text-xl font-light">
                      Бренд
                    </p>
                    <input
                        type="text"
                        onChange={(e) => setBrand(e.currentTarget.value)}
                        placeholder="Название"
                        className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
                    />
                    {/*<p className="w-full pl-2 flex text-sm font-light">Цена</p>*/}
                    {/*<input*/}
                    {/*    type="number"*/}
                    {/*    placeholder="Сумма"*/}
                    {/*    onChange={(e) => setPrice(e.currentTarget.value)}*/}
                    {/*    className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"*/}
                    {/*/>*/}
                  </div>
                </div>}

                {addBrandOpen && <div className="mt-5 sm:mt-4 sm:flex sm:flex justify-center">
                  <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={addNewBrand}
                  >
                    Добавить Товар
                  </button>
                  <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleClose}
                  >
                    Отмена
                  </button>
                </div>}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
