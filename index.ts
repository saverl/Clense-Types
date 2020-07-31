export interface User {
  name: string;
  email: string;
  uid: string;
  status: "normal" | "pro";
  coins: number;
  gender: "male" | "female";
  productsInCart: number;

  dob?: Date;
  addresses?: Address[];
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
  reviews: Review[];
  skuCode: string;
  binNo: string;

  material?: string;
  keywords?: string[];
}

export interface Review {
  title?: string;
  likes: number;
  dislikes: number;
  description: string;
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
  email: string;
  productIds: string[];
}

export interface Cart {
  lastUpdatedAt: Date;

  products: {
    productId: string;
    productName: string;
    quantity: number;
    skuCode: string;
    binNo: string;
  }[];
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
  name: string;
  phoneNumber: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pinCode: number;
  isDefault: boolean;
  type: "home" | "office";
}
