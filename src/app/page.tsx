import { ProductPageContent } from "@/components/productPageContent";
import { ProductDetails } from "@/components/productPageContent/productDetails";
import { ProductImage } from "@/components/productPageContent/productImage";


export default function Home() {

  return (
    <div className="py-16 container">
      <div className="flex flex-col lg:flex-row gap-3 bg-white w-full p-3">
        <ProductPageContent />
      </div>
    </div>
  );
}
