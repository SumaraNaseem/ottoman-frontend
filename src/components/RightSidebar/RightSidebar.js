import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import Slider from "react-slick";
import { LiaClipboard } from "react-icons/lia";
import { AiOutlineTag } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineInfoCircle } from "react-icons/ai";


const RightSidebar = ({ isOpen, onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3"
    ];
    const [paragraphText, setParagraphText] = useState(true);
    const [buttonColors, setButtonColors] = useState({
        button1: 'bg-white text-[#00ACBB]',
        button2: 'bg-white text-[#00ACBB]',
    });

    const handleButtonClick = (button) => {
        setParagraphText(true);
        if (button === 'button1') {
            setButtonColors({
                button1: 'bg-[#00ACBB] text-white',
                button2: 'bg-white text-[#00ACBB]',
            });
        } else if (button === 'button2') {
            setButtonColors({
                button1: 'bg-white text-[#00ACBB]',
                button2: 'bg-[#00ACBB] text-white',
            });
        }
    };

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    
    { id: 1, label: 'Tab 2', content: 'Content of Tab 2' },
    { id: 2, label: 'Tab 3', content: 'Content of Tab 3' },
  ];

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };
    return (
        <div className={`fixed top-0 right-0 h-full w-[360px] bg-white text-white overflow-y-auto  transition-transform ease-in-out duration-300 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="grid grid-cols-1 px-[20px] md:grid-cols-2 gap-2">
                <div style={{ color: "black" }} className="text-medium font-medium mt-3 py-[5px] text-black-700  border-0 align-baseline font-inherit text-base">
                    SHOPPING CART
                </div>

                <div className=" flex justify-end">
                    <button className="text-black text-bolder" style={{ color: "black" }} onClick={onClose}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </div>
            <hr />
            <div className='overflow-auto scrollbar-hidden max-w-[100%] max-h-[150px]'>
                <div className="grid grid-cols-12 gap-1">
                    <div className="flex justify-center items-center col-span-5">
                        <div className="flex justify-center items-center">
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
                   
                    <div className="col-span-7">
                        <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap  font-medium text-gray-800 text-[14px]">
                            Safina Chesterfield Ottoman bed
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Estimated between:</span> Jul 28 and Aug 07
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Size:</span> Small Single 2ft6 +£200
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Type:</span> Base Only +£0
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Color:</span> Naples Orange £75
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Headboard Height:</span> 26inch Strutted Headboard
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Strutted Headboards:</span> Soneros +£125
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Would You like to add a Mattress?:</span> Yes
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">2ft6 Mattress Options:</span> 2ft6 Memory 5000 (Medium/Support) +£375
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Deliver To Room Service:</span> Yes +£45
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Furniture Removal Service:</span> Yes
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">Bed Size:</span> King Size/ Super King
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            <span className="font-medium">No. Items:</span> Mattress Only +£55
                        </p>
                        <p className=" text-[13px] text-red-600">
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
                <div className='mt-1 bg-gray-100 flex justify-center items-center'>
                    <div className='flex items-center justify-center space-x-5 py-5'>
                        <div className='relative group'>
                            <LiaClipboard className='border drop-shadow-lg bg-gray-100 border-transparent rounded-full p-3 h-12 w-12 flex items-center justify-center hover:bg-white' style={{ color: "black", fontSize: "45px" }} />
                            <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-center text-[14px] p-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity w-[150px]'>Add order note</span>
                        </div>
                        <div className='relative group'>
                            <AiOutlineTag className='border drop-shadow-lg bg-gray-100 border-transparent rounded-full p-3 h-12 w-12 flex items-center justify-center hover:bg-white' style={{ color: "black", fontSize: "45px" }} />
                            <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-center text-[14px] p-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity w-[150px]'>Estimate</span>
                        </div>
                        <div className='relative group'>
                            <AiOutlineTag className='border drop-shadow-lg bg-gray-100 border-transparent rounded-full p-3 h-12 w-12 flex items-center justify-center hover:bg-white' style={{ color: "black", fontSize: "45px" }} />
                            <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-center text-[14px] p-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity w-[150px]'>Add the Coupon</span>
                        </div>
                    </div>

                </div> 
                <div className="ml-3 mt-3 bg-white shadow-md rounded-lg">
                    <div className="bg-gray-200 py-3 rounded-t-lg">
                        <h2 className="text-center text-black text-lg font-semibold">You may also like </h2>
                    </div>

                    <Slider {...settings}>
                        {images.map((img, index) => (
<div className='px-2' >
<div class="grid grid-cols-12 py-3  gap-4">

<div class="col-span-3">

    <img src="https://via.placeholder.com/600x400?text=Image+1" alt="Image" class="w-[50px] h-[50px]" />
</div>


<div class="col-span-6 cursor-pointer text-start overflow-hidden text-ellipsis whitespace-nowrap  font-medium text-gray-800 text-[14px] text-black">

    <p className='text-gray-500'>Bed Base Only Without Headboard</p>
    <p className='text-[#00ACBB]'>£4,155.00</p>

</div>


<div class="col-span-3 flex items-center justify-center">

    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18m-7 4h7m-7-8h7m-7 4h7"></path>
    </svg>
</div>
</div>
</div>
                           
                        ))}
                    </Slider>
                </div>
            </div>
        <div className=' mt-0  shadow-custom-lightblue'></div>
  {/* <hr className="shadow-custom-lightblue " /> */}

 <div className="grid grid-cols-12 py-4 mx-4 gap-1">
        <input
            type="text"
            placeholder="Discount code"
            className="col-span-9 p-2 border border-gray-300"
        />
        <button
            type="submit"
            className="col-span-3 bg-black text-white px-4 py-2 hover:bg-gray-800"
        >
            Apply
        </button>
    </div>








            <div className="flex flex-col mx-4 items-center space-y-1 py-2">
                <div className="flex w-full bg-white border border-[#00ACBB] rounded-full">
                    <button
                        onClick={() => handleButtonClick('button1')}
                        className={`py-2 w-full rounded-tl-full text-[15px] rounded-bl-full ${buttonColors.button1} hover:bg-[#00ACBB] hover:text-white`}
                    >
                        Pay Deposit
                    </button>
                    <button
                        onClick={() => handleButtonClick('button2')}
                        className={`w-full rounded-tr-full text-[15px] rounded-br-full ${buttonColors.button2} hover:bg-[#00ACBB] hover:text-white`}
                    >
                        Pay Full Amount
                    </button>
                </div>
            </div>
            <p className='text-black'>
                {!paragraphText ? (<div className='flex space-x-6'>
                    <div className='text-start'>12123</div>
                    <div className='text-end'>3435433</div>
                </div>) : (<><div className="flex px-4 justify-between w-full" style={{ textAlign: "between" }}>
                    <div className="text-start text-gray-400 text-[13px] font-medium pr-4">
                        <p> Total price</p>
                    </div>
                    <div className="text-end text-gray-400 text-[13px] font-medium pl-4"><p> £4,155.00</p></div>
                </div>
                    <div className="flex px-4 justify-between w-full" style={{ textAlign: "between" }}>
                        <div className="text-start text-gray-400 text-[13px] font-medium pr-4">
                            <p> Pay on Delivery of Goods </p>
                        </div>
                        <div className="text-end text-gray-400 text-[13px] font-medium pl-4"><p> £3,947.25</p></div>
                    </div>
                    <div className="flex px-4 justify-between w-full" style={{ textAlign: "between" }}>
                        <div className="text-start text-gray-400 text-[15px] font-medium pr-4">
                            <p> PayNow</p>
                        </div>
                        <div className="text-end text-gray-400 text-[15px] font-medium pl-4"><p> £207.75</p></div>
                    </div>
                </>)}
            </p>
            <div className=" px-4 py-1 justify-between w-full" style={{ textAlign: "between" }}>
                <div className="text-start text-gray-400 text-[14px] font-medium pr-4">
                    <p>Tax included and shippinf calculated at checkout</p>
                </div>

            </div>
            <div className=" px-4 py-1 justify-between w-full" style={{ textAlign: "between" }}>
                <div className="text-start text-gray-400 text-[10px] font-medium pr-4">
                    <div class="flex items-center w-full mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" class="ms-2 text-sm text-gray-400 text-[14px] font-medium  dark:text-gray-300"> I agree with the terms and conditions.</label>
                    </div>
                </div>
            </div>


            



            <div className="flex justify-center py-3 mx-4">
  <button className="w-full bg-white text-[#00ACBB] text-center py-2  rounded-full border border-[#00ACBB] hover:text-white hover:bg-[#00ACBB]   ">
    View cart
  </button> 
</div> 
<div className="flex justify-center py-5 mx-4">
  <button className="w-full  bg-[#00ACBB] text-white text-center py-2  rounded-full border border-[#00ACBB] hover:text-white hover:bg-[#00ACBB]   ">
    Check out
  </button> 
</div>  

        </div>
    );
};

export default RightSidebar;
