export interface User {
  name: string;
  email: string;
  uid: string;
  status: "normal" | "pro";
  coins: number;
  productsInCart: number;
  lastCartUpdatedAt: Date;
  referralCode: string;

  gender?: "male" | "female";
  dob?: Date;
  alternateMobileNo?: string;
  nickname?: string;
  photoUrl?: string;
  phoneNumber?: string;
}

export interface Product {
  id: string;
  type: ProductType;
  productFor: "male" | "female";
  name: string;
  description: string;
  originalPrice: number;
  offerPrice: number;
  offerPercent: number;
  thumbnail: string;
  images: string[];
  details: string;
  seller: string;
  brand: string;
  averageRating: number;
  totalRatings: number;
  ratings: Ratings;
  totalReviews: number;
  skuCode: string;
  binNo: string;
  coins: number;

  material?: string;
  keywords?: string[];
}

export interface Ratings {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface Review {
  id: string;
  uid: string;
  likes: number;
  dislikes: number;
  description: string;
  stars: number;

  title?: string;
}

// TODO Create product variation types
export interface ProductType {
  position: "isUpperBody" | "isLowerBody" | "isFullBody";
  sizes: {
    S?: boolean;
    M?: boolean;
    L?: boolean;
    XL?: boolean;
    XXL?: boolean;
    26?: boolean;
    28?: boolean;
    30?: boolean;
    32?: boolean;
    34?: boolean;
    36?: boolean;
    38?: boolean;
    40?: boolean;
    42?: boolean;
    oneSize?: boolean;
  };
  quantity: {
    S?: number;
    M?: number;
    L?: number;
    XL?: number;
    XXL?: number;
    26?: number;
    28?: number;
    30?: number;
    32?: number;
    34?: number;
    36?: number;
    38?: number;
    40?: number;
    42?: number;
    oneSize?: number;
  };
}

export interface Wishlist {
  id: string;
  email: string;
  productId: string;
}

export interface Cart {
  id: string;
  productId: string;
  productName: string;
  productDescription: string;
  productThumbnail: string;
  productOfferPrice: number;
  productOfferPercent: number;
  productOriginalPrice: number;
  quantity: number;
  coins: number;
  skuCode: string;
  binNo: string;
}

export interface Order {
  id: string;
  orderId: string;
  userId: string;
  paymentId: string;
  paymentType: "COD" | "PREPAID";
  status: "processing" | "packed" | "shipped" | "delivered";
  createdAt: Date;
  amountPaid: number;

  // User
  email: string;
  address: Address;
  signature?: string;

  // Cart
  cartItems: Cart;
}

export interface Address {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pinCode: number;
  type: "home" | "office";
}
