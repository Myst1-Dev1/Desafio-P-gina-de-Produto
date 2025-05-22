import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


export function ProductQuantity() {
    const stock = 4659;

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <>
            <div className="flex w-full lg:gap-0 gap-[18px] justify-between max-w-2xl mt-2">
                <h6 className="text-zinc-500">Quantidade</h6>
                <div className="flex">
                    <div onClick={decrease} className="border border-gray-300 p-2 grid place-content-center text-xs text-zinc-500 cursor-pointer"><FaMinus /></div>
                    <div className="border border-gray-300 p-2 text-center text-red-400 w-16 grid place-content-center">{quantity}</div>
                    <div onClick={increase} className="border border-gray-300 p-2 grid place-content-center text-xs text-zinc-500 cursor-pointer"><FaPlus /></div>
                    <h6 className="text-zinc-500 pl-4 m-auto">{stock} peças disponíveis</h6>
                </div>
            </div>
        </>
    )
}