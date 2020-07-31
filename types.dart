abstract class User {
  final String name;
  final String email;
  final String uid;
  final Status status;
  final int coins;
  final Gender gender;
  final int productsInCart;

  // Optional params
  final DateTime dob;
  final List<Address> addresses;
  final String alternateMobileNo;
  final String phoneNumber;
  final String nickname;
  final String photoUrl;

  User({
    @required this.name,
    @required this.email,
    @required this.uid,
    @required this.status,
    @required this.coins,
    @required this.gender,
    @required this.productsInCart,

    // Optional params
    this.dob,
    this.addresses,
    this.alternateMobileNo,
    this.phoneNumber,
    this.nickname,
    this.photoUrl,
  }) : assert(false);
}

abstract class Product {
  final String id;
  final ProductType type;
  final Gender productFor;
  final String name;
  final String description;
  final int originalPrice;
  final int offerPrice;
  final int offerPercent;
  final String thumbnail;
  final List<String> images;
  final String details;
  final String seller;
  final String brand;
  final double averageRating;
  final int totalRatings;
  final List<Review> reviews;
  final String skuCode;
  final String binNo;

  // Optional params
  final String material;
  final List<String> keywords;

  Product({
    @required this.id,
    @required this.type,
    @required this.productFor,
    @required this.name,
    @required this.description,
    @required this.originalPrice,
    @required this.offerPrice,
    @required this.offerPercent,
    @required this.thumbnail,
    @required this.images,
    @required this.details,
    @required this.seller,
    @required this.brand,
    @required this.averageRating,
    @required this.totalRatings,
    @required this.reviews,
    @required this.skuCode,
    @required this.binNo,

    // Optional Param
    this.material,
    this.keywords,
  });
}

abstract class Review {
  final int likes;
  final int dislikes;
  final String description;

  // Optional Param
  final String title;

  Review({
    @required this.likes,
    @required this.dislikes,
    @required this.description,

    // Optional Param
    this.title,
  });
}

abstract class ProductType {
  final ProductPosition position;
  final Map<AvailableSizes, bool> sizes;
  final Map<AvailableSizes, int> quantity;

  ProductType({
    @required this.position,
    @required this.sizes,
    @required this.quantity,
  });
}

abstract class Wishlist {
  final String email;
  final List<String> productIds;

  Wishlist({
    @required this.email,
    @required this.productIds,
  });
}

abstract class Cart {
  final DateTime lastUpdatedAt;

  final List<Map<CartProductDetails, dynamic>> products;

  Cart({
    @required this.lastUpdatedAt,
    @required this.products,
  });
}

abstract class Order {
  final String id;
  final String orderId;
  final String userId;
  final String paymentId;
  final PaymentType paymentType;
  final OrderStatus status;
  final DateTime createdAt;
  final double amountPaid;

  final String email;
  final Address address;
  final String signature;

  final Cart cartItems;

  Order({
    @required this.id,
    @required this.orderId,
    @required this.userId,
    @required this.paymentId,
    @required this.paymentType,
    @required this.status,
    @required this.createdAt,
    @required this.amountPaid,
    @required this.email,
    @required this.address,
    @required this.cartItems,

    // Optional Params
    this.signature,
  });
}

abstract class Address {
  final String name;
  final String phoneNumber;
  final String address;
  final String locality;
  final String city;
  final String state;
  final int pinCode;
  final bool isDefault;
  final AddressType type;

  Address({
    @required this.name,
    @required this.phoneNumber,
    @required this.address,
    @required this.locality,
    @required this.city,
    @required this.state,
    @required this.pinCode,
    @required this.isDefault,
    @required this.type,
  });
}

enum Status { normal, pro }
enum Gender { male, female }
enum AddressType { home, office }
enum PaymentType { COD, PREPAID }
enum OrderStatus { processing, packed, shipped, delivered }
enum ProductPosition { isUpperBody, isLowerBody, isFullBody }
enum CartProductDetails { productId, productName, quantity, skuCode, binNo }
enum AvailableSizes {
  S,
  M,
  L,
  XL,
  XXL,
  S26,
  S28,
  S30,
  S32,
  S34,
  S36,
  S38,
  S40,
  S42,
  oneSize
}
