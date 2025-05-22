import { Product } from "@/@types/product";

interface ProductSizeProps {
    product: Product;
    setMainImage: (img: string) => void;
    selectedSize: string;
    onSizeSelect: (size: string) => void;
}

export function ProductSize({ product, setMainImage, onSizeSelect, selectedSize } :ProductSizeProps) {
     const getSizeImage = (size: string) => {
        return product.images.find((img) => img.size === size)?.img || '';
    };

    return (
        <>
            <div className="flex w-full lg:gap-0 gap-[18px] justify-between max-w-2xl mt-2">
                <h6 className="text-zinc-500">Tamanho</h6>
                <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                        <div
                            key={size.id}
                            onClick={() => {
                                onSizeSelect(size.size);
                                setMainImage(getSizeImage(size.size));
                            }}
                            className={`cursor-pointer border p-1 w-16 grid place-content-center ${
                            selectedSize === size.size ? "border-red-400" : "border-gray-300"
                            } hover:border-red-400`}
                        >
                            {size.size}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}