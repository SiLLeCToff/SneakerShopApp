import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-black h-300px justify-center items-center">
      <div className="flex xl:flex-row max-sm:flex-wrap gap-x-2 sm:flex-wrap 2xl:gap-0 xl:gap-x-s5 mt-5 md:gap-x-5  w-11/12 h-5/6  justify-between items-start  text-white">
        <div className="flex flex-col 2xl:w-1/4 max-sm:w-1/2  h-auto gap-y-3 ">
          <h3 className="font-medium text-xl mb-2">ПОМОЩЬ</h3>
          <a className=" font-thin text-sm">Способ оплаты</a>
          <a className=" font-thin text-sm">Доставка</a>
          <a className=" font-thin text-sm">Часто задаваемые вопросы</a>
          <a className=" font-thin text-sm">Обмен и возврат</a>
        </div>
        <div className="flex flex-col 2xl:w-1/4 max-sm:w-1/2  h-auto">
          <h3 className="font-medium text-xl mb-2">Политики и условия</h3>
          <a className=" font-thin text-sm">Политика конфиденциальности</a>
        </div>
        <div className="flex flex-col 2xl:w-1/4 max-sm:w-1/2 h-auto">
          <h3 className="font-medium text-xl mb-2">ПОДДЕРЖКА</h3>
          <a className=" font-thin text-sm">pochta@gmail.com</a>
          <a className=" font-thin text-sm">+7 999 444 777 1</a>
          <a className=" font-thin text-sm">Telegram</a>
          <a className=" font-thin text-sm">+7 999 444 777 1</a>
        </div>
        <div className="flex flex-col  2xl:w-1/4 max-sm:w-1/2 h-auto ">
          <h3 className="font-medium text-xl mb-2">Cоц. сети</h3>
          <a className=" font-thin text-sm"></a>
          <a className=" font-thin text-sm"></a>
        </div>
      </div>
      <div className="flex  w-11/12 h-1/6 justify-between items-center text-white">
        <span className=" opacity-20">2023 информационный характер ©</span>
        <span className=" opacity-20">SillectOFF</span>
      </div>
    </div>
  );
};
