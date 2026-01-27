import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import ProductDetailsPrimary from "@/components/sections/products/ProductDetailsPrimary";
import { productsData } from "@/data/productsData";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const ProductDetailsMain = ({ currentItemId }) => {
	const items = productsData;
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { title, tagline } = currentItem || {};

	return (
		<div>
			<FullScreenHero
				title={title ? title : "Product Details"}
				text={tagline || currentItem?.desc || "Product Details"}
				breadcrums={[{ name: "Products", path: "/products" }]}
				image={currentItem?.image}
			/>
			<ProductDetailsPrimary
				option={{
					currentItem,
					items,
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
			/>
		</div>
	);
};

export default ProductDetailsMain;
