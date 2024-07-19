import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { LiaClipboard } from "react-icons/lia";
import { AiOutlineTag } from "react-icons/ai";


const RightSidebar = ({ isOpen, onClose }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };
    return (
        <div className={`fixed top-0 right-0 h-full w-1/3 bg-white text-white overflow-y-auto transition-transform ease-in-out duration-300 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{ color: "black" }} className="text-xl font-medium mt-3 p-4 py-[5px] text-black-700 pl-[20px] border-0 align-baseline font-inherit text-base">
                    SHOPPING CART
                </div>

                <div className="p-4 flex justify-end">
                    <button className="text-black text-bolder" style={{ color: "black" }} onClick={onClose}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </div>
            <hr />

            <div className="grid grid-cols-12 gap-2 max-h-[300px] overflow-auto scrollbar-hidden">
                <div className="flex justify-center items-center col-span-5">
                    <div className="h-[150px] w-[150px] flex justify-center items-center">
                        <Image
                            src="/Super-Deep-Base.png"
                            alt="openbed"
                            height={150}
                            width={150}
                            objectFit="contain"
                            className="max-w-full max-h-full"
                        />
                    </div>
                </div>
                <div className="p-4 col-span-7">
                    <p className="cursor-pointer font-medium text-gray-800 text-medium">
                        Safina Chesterfield Ottoman bed
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Estimated between:</span> Jul 28 and Aug 07
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Size:</span> Small Single 2ft6 +£200
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Type:</span> Base Only +£0
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Color:</span> Naples Orange £75
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Headboard Height:</span> 26inch Strutted Headboard
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Strutted Headboards:</span> Soneros +£125
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Would You like to add a Mattress?:</span> Yes
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">2ft6 Mattress Options:</span> 2ft6 Memory 5000 (Medium/Support) +£375
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Deliver To Room Service:</span> Yes +£45
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Furniture Removal Service:</span> Yes
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">Bed Size:</span> King Size/ Super King
                    </p>
                    <p className="text-gray-500 text-[15px]">
                        <span className="font-medium">No. Items:</span> Mattress Only +£55
                    </p>
                    <p className=" text-[15px] text-red-600">
                        <span className="line-through text-gray-500"> £515.00</span> £2,625.00
                    </p>
                    <div className="flex flex-col items-start mt-2">
                        <div className="flex space-x-2 border-[1px] border-black rounded-full">
                            <button onClick={decrement} className="px-4 py-2 rounded text-black-400">
                                <FaMinus style={{ color: "black", fontSize: "15" }} />
                            </button>
                            <p style={{ color: "black", fontSize: "15" }} className='p-2  text-black-500'>{count}</p>

                            <button onClick={increment} className="px-4 py-2 rounded text-black-400">
                                <FaPlus style={{ color: "black", fontSize: "15" }} />
                            </button>
                        </div>

                    </div>
                    <RiDeleteBinLine className='mt-2' style={{ color: "black", fontSize: "20" }} />
                </div>

            </div>
            <div className='mt-1 bg-gray-100 w-[100%]' style={{width:"100%"}}>
                    <div className='flex justfy-center w-[100%] px-10 py-10 items-center space-x-3'>
                        <LiaClipboard style={{ color: "black", fontSize: "55px" }} />
                        <AiOutlineTag style={{ color: "black", fontSize: "55px" }}/>
                        <AiOutlineTag style={{ color: "black", fontSize: "55px" }}/>
                    </div>

                </div>







            <hr />

        </div>
    );
};

export default RightSidebar;
