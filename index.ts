export interface User {
  name: string;
  email: string;
  uid: string;
  status: "normal" | "pro";
  coins: number;
  gender: "male" | "female";

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
  productId: string;
}

export interface Cart {
  email: string;
  productId: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface Order {
  orderId: string;
  userId: string;
  status: "processing" | "packed" | "shipped" | "delivered";
  createdAt: Date;
  lastUpdatedAt: Date;
  quantity: number;
  amountPaid: number;
  binNo: string;

  // User
  email: string;
  address: Address;

  // Product
  productId: string;
  productName: string;
  skuCode: string;
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
