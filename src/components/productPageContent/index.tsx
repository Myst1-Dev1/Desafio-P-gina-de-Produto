'use client'

import { products } from "@/components/utils/data";
import { ProductImage } from "./productImage";
import { ProductDetails } from "./productDetails";
import { useState } from "react";


export function ProductPageContent() {
      const product = products[0];

     const [mainImage, setMainImage] = useState(product.images[0].img);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].color);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);

    return (
        <>
            <ProductImage images = {product.images} mainImage={mainImage} setMainImage={setMainImage} />
            <ProductDetails 
                product={product}
                setMainImage={setMainImage}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                onColorSelect={setSelectedColor}
                onSizeSelect={setSelectedSize} />
        </>
    )
}