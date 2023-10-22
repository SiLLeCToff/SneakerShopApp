import {Fragment, useEffect, useState} from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {useDispatch, useSelector} from "react-redux";
import {activeItemChange} from "../../../../../../../store/propsSlice.jsx";
import isLoading from "../../../../../../IsLoading/IsLoading.jsx";
import IsLoading from "../../../../../../IsLoading/IsLoading.jsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BrandMenu({onSelect}) {
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.brand);
  const activeItem = useSelector((state) => state.props.activeItemA);
  const [selected, setSelected] = useState(activeItem ? activeItem.brandId : '');



  const [brandName, setBrandName] = useState(
      activeItem && brands.find((brand) => brand.id === activeItem.brandId)
          ? brands.find((brand) => brand.id === activeItem.brandId).name
          : ""
  );



  useEffect(() => {
    if (activeItem) {
      setSelected(activeItem.brandId)
      onSelect(activeItem.brandId)
    }

  }, [activeItem]);

  const handleOptionClick = (brand) => {
    setSelected(brand.id);
    onSelect(brand.id);
  };



  return (
      <>
        {activeItem ? (
            <Listbox value={selected} onChange={(e) => handleOptionClick(e)}>
              {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                      Assigned to
                    </Listbox.Label>
                    <div className="relative mt-2" onClick={(e) => e.stopPropagation()}>
                      <Listbox.Button
                          className="relative w-200px h-6 flex justify-center items-center cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                  <span className="truncate flex">
                    {brands.find((brand) => brand.id === selected)?.name || 'Select Brand'}
                  </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                      </Listbox.Button>

                      <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                      >
                        <Listbox.Options
                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >

                          {brands.map((brand) => (
                              <Listbox.Option
                                  key={brand.id}
                                  value={brand}
                                  onClick={() => handleOptionClick(brand)}
                              >

                                {({ active, selected }) => (
                                  <ul>
                                    <li
                                        className={classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'cursor-pointer select-none relative px-4 py-2'
                                        )}
                                    >
                                      {brand.name}
                                      {selected ? (
                                          <span
                                              className={classNames(
                                                  active ? 'text-white' : 'text-indigo-600',
                                                  'absolute inset-y-0 left-0 flex items-center pl-3'
                                              )}
                                          >
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                                      ) : null}
                                    </li>
                                  </ul>

                                )}

                              </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
              )}
            </Listbox>
        ) : null}
      </>
  );
}