'use client';

import { FaCartPlus, FaStar } from "react-icons/fa";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { formatPrice } from "../../utils/formatPrice";
import { Modal } from "../../modal";
import { Freight } from "./freight";
import { ProductColor } from "./productColor";
import { ProductSize } from "./productSize";
import { ProductQuantity } from "./productQuantity";
import { Product } from "@/@types/product";

export interface ProductProps {
   product: Product;
   setMainImage: (img: string) => void;
   selectedColor: string;
   selectedSize: string;
   onColorSelect: (color: string) => void;
   onSizeSelect: (size: string) => void;
}

export function ProductDetails({ product, selectedColor, selectedSize, onColorSelect, onSizeSelect , setMainImage }:ProductProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl">Camisa Térmica Masculina Proteção Uv 50+ Segunda Pele Camiseta Blusa Malha Fria Academia Manga Longa F7 NEW STYLE</h2>
                <div className="flex flex-wrap gap-5">
                    <div className="flex items-center gap-2 border-r border-zinc-300 pr-5">
                        <h6 className="border-b border-black pb-[2px] w-fit">4.8</h6>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500 text-sm" />
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 border-0 lg:border-r border-zinc-300 pr-5">
                        <h6 className="border-b border-black pb-[2px] w-fit">13mil</h6>
                        <span className="font-thin text-zinc-500">Avaliações</span>
                    </div>
                    <div className="flex gap-2">
                        <h6>32,5mil</h6>
                        <span className="font-thin text-zinc-500">Vendido(S)</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-red-500">{formatPrice(product.price * 0.84)}</h3>
                    <h6 className="line-through text-zinc-400">{formatPrice(product.price)}</h6>
                    <span className="text-xs bg-red-100 text-red-500 font-bold">-16%</span>
                </div>
                <div className="flex flex-col gap-5 lg:gap-3">
                    <div className="flex w-full justify-between max-w-2xl items-center">
                        <h6 className="text-zinc-500">Cartão de credito</h6>
                        <div className="flex gap-5">
                            <span className="text-sm">4x R$6,47</span>
                            <button onClick={() => setIsOpenModal(true)} className="border-none text-blue-600 cursor-pointer text-sm flex gap-2 items-end">Opções de parcelamento <MdKeyboardArrowRight className="text-xl" /></button>
                        </div>
                    </div>
                    <Freight />
                    <ProductColor product = {product} setMainImage = {setMainImage} selectedColor = {selectedColor} onColorSelect = {onColorSelect}  />
                    <ProductSize product = {product} setMainImage= {setMainImage} selectedSize = {selectedSize} onSizeSelect = {onSizeSelect} />
                    <ProductQuantity />
                    <div className="mt-3 flex flex-wrap justify-center lg:justify-normal gap-3">
                        <button className="bg-red-200 border border-red-500 lg:max-w-60 w-full text-red-500 flex gap-3 justify-center items-center p-3 transition-all duration-500 hover:brightness-90 cursor-pointer"><FaCartPlus className="text-red-400" /> Adicionar ao carrinho</button>
                        <button className="bg-red-500 text-white lg:max-w-40 w-full p-3 border-none cursor-pointer transition-all duration-500 hover:brightness-90">Comprar agora</button>
                    </div>
                </div>
            </div>

            <Modal isOpenModal={isOpenModal} onClose={() => setIsOpenModal(false)} maxWidth="max-w-xl">
                <div className="p-3">
                    <h2 className="font-medium text-zinc-600 text-xl">Parcelamento</h2>
                    <div className="mt-5 flex flex-col gap-2">
                        {product.parcel.map(({ id, parcelValue, total, text }) => (
                        <div key={id} className="w-full flex justify-between">
                            <span className={`${parcelValue === null ? 'text-zinc-400' : ''}`}>{id}x {parcelValue === null ? '' : formatPrice(parcelValue)}</span>
                            <span className={`${total === null ? 'text-zinc-400' : ''}`}>{total === null ? text : formatPrice(total)}</span>
                        </div>
                        ))}
                    </div>
                    <div className="mt-5 flex items-end w-full justify-between">
                        <p className="text-zinc-400">Os valores decimais eventualmente não divididos por arredondamento serão adicionados à primeira parcela.</p>
                        <button onClick={() => setIsOpenModal(false)} className="border border-zinc-400 text-zinc-500 px-3 h-12 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white">Fechar</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}