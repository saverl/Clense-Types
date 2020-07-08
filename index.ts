interface User {
  name: string;
  email: string;
  uid: string;
  status: string;
  coins: number;
  gender: Gender;
  addresses: Address[];

  dob?: Date;
  alternateMobileNo?: string;
  nickname?: string;
  photoUrl?: string;
  phoneNumber?: string;
}

interface Product {
  id: string;
  type: ProductType;
  for: Gender;
  name: string;
  description: string;
  originalPrice: string;
  offerPrice: string;
  offerPercent: number;
  images: string[];
  details: string;
  seller: string;

  material?: string;
  keywords?: string[];
}

interface ProductType {
  isUpperBody: boolean;
  isLowerBody: boolean;
  isFullBody: boolean;

  sizes: {
    S?: boolean;
    M?: boolean;
    L?: boolean;
    X?: boolean;
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
    X?: number;
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

interface Wishlist {
  email: string;
  orderId: string;
}

interface Cart {
  email: string;
  orderId: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}

interface Order {
  email: string;
  productName: string;
  orderId: string;
  status: Status;
  createdAt: Date;
  lastUpdatedAt: Date;
}

interface Address {
  name: string;
  phoneNumber: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pinCode: number;
  isDefault: boolean;
  type: TypeOfAddress;
}

type Status = "shipped" | "delivered";
type TypeOfAddress = "home" | "office";
type Gender = "male" | "female";

export { User, Cart, Order, Wishlist, Product };
