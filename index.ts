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

interface Wishlist {}

interface Cart {
  email: string;
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

export { User, Cart, Order, Wishlist };
