import React from "react";
import { ButtonAdd } from "./ButtonAdd/ButtonAdd";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";
import { ItemsList } from "./ItemsList/ItemsList";

export const LeftBlock = () => {
  return (
    <div className="flex h-full flex-col w-9/12 rounded-3xl  border border-gray-50 bg-white relative">
      <div className="flex w-full h-10% items-center px-10 justify-between">
        <h1 className="text-lg">Товары</h1>
        <div className="flex h-full justify-between gap-5 items-center">
          <Search />
          <div className="bg-black flex h-1/2 w-px"></div>
          {/* <button className="flex bg-white border-2 font-medium border-black rounded-3xl py-2 px-2 whitespace-nowrap">
                Добавить Товар
                <PlusIcon className="w-6 h-6 bg-opacity-0" />
              </button> */}
          <ButtonAdd />
        </div>
      </div>
      <div className="flex w-full h-10% items-center justify-center ">
        Фильтр
      </div>
      <div className="flex w-full h-70% items-center justify-center">
        <ItemsList />
      </div>
      <div className="absolute  drop-shadow-lg shadow-gray-400 border  border-gray-100 rounded-3xl bottom-0 w-full h-10% items-center bg-white">
        <Pagination />
      </div>
    </div>
  );
};
