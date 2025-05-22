'use client'

import { ImageType } from "@/@types/image";
import Image from "next/image";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  images: ImageType[];
  mainImage: string;
  setMainImage: (img: string) => void;
}

export function ProductImage({ images, mainImage, setMainImage }: Props) {

    const scrollRef = useRef<null | any>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative lg:max-w-md w-full flex flex-col gap-3">
            <div className="absolute top-0 lg:top-5 right-[1px] lg:right-5 rounded-full h-10 w-10 bg-red-400 text-white grid place-content-center cursor-pointer transition-all duration-500 hover:brightness-90">
                <FaHeart />
            </div>

            <Image
                className="w-full object-cover"
                src={mainImage}
                width={600}
                height={600}
                alt="foto do produto"
            />

            <div className="cursor-pointer transition-all duration-500 hover:bg-red-600 hover:text-white h-10 w-5 bg-zinc-100 grid place-content-center absolute bottom-5">
                <MdKeyboardArrowLeft onClick={scrollLeft} className="text-3xl" />
            </div>
            <div ref={scrollRef} className="flex gap-3 w-full overflow-x-auto scrollDontShow">
                {images.map((image) => (
                <Image
                    key={image.id}
                    className={`w-24 border ${mainImage === image.img ? 'border-red-400' : 'border-transparent'} object-cover cursor-pointer`}
                    src={image.img}
                    width={100}
                    height={100}
                    alt={`variação do produto - cor ${image.color}`}
                    onClick={() => setMainImage(image.img)}
                />
                ))}
            </div>
            <div className="cursor-pointer transition-all duration-500 hover:bg-red-600 hover:text-white h-10 w-5 bg-zinc-100 grid place-content-center absolute bottom-5 right-0">
                <MdKeyboardArrowRight onClick={scrollRight} className="text-3xl" />
            </div>
        </div>
    )
}