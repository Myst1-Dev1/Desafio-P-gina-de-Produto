import Image from "next/image";
import { Product } from "@/@types/product";

interface productColorProps {
    product: Product;
    setMainImage: (img: string) => void;
    selectedColor: string;
    onColorSelect: (color: string) => void;
}

export function ProductColor({ product, setMainImage, selectedColor, onColorSelect  }:productColorProps) {
     const getColorImage = (color: string) => {
        return product.images.find((img) => img.color === color)?.img || '';
    };
    
    return (
        <>
            <div className="flex w-full lg:gap-0 gap-[18px] justify-between max-w-2xl">
                <h6 className="text-zinc-500">Cor</h6>
                <div className="flex flex-wrap gap-3">
                     {product.colors.map((color) => {
                        const colorImg = getColorImage(color.color);
                        const isSelected = selectedColor === color.color;

                        return (
                            <div
                            key={color.id}
                            className={`flex gap-2 items-center border ${
                                isSelected ? "border-red-400" : "border-gray-300"
                            } p-2 cursor-pointer`}
                            onClick={() => {
                                onColorSelect(color.color);
                                setMainImage(colorImg);
                            }}
                            >
                            <Image
                                className="w-6 object-cover"
                                src={colorImg}
                                width={40}
                                height={40}
                                alt={`produto com a cor ${color.color}`}
                            />
                            {color.color}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}