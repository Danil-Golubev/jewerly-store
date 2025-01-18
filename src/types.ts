export type Color = {
	_id: string;
	color: string;
	title: string;
};

export type IdAndTitle = {
	_id: string;
	title: string;
};

export type size = {
	_id: string;
	size: string;
	amount: number;
};
export type Product = {
	_id: string;
	additionalImages: string[];
	color: Color;
	imageURL: string;
	sizes: [{ size: string; amount: number }];
};

export type ProductType = {
	_id: string;
	title: string;
	dimensions: string;
	price: number;
	description: string;
	jewerlyType: string;
	availableSizes: string;
	availableColors: Color[];
	chainType: IdAndTitle[];
	stoneType: IdAndTitle;
	materialType: IdAndTitle;
	variants: Product[];
};
