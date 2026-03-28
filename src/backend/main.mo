import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Product = {
    name : Text;
    price : Nat;
  };

  type Cart = {
    items : [(Nat, Nat)]; // productId and quantity
  };

  type Order = {
    items : [(Nat, Nat)];
    total : Nat;
  };

  let products = Map.empty<Nat, Product>();
  let carts = Map.empty<Principal, Cart>();
  let orders = Map.empty<Principal, [Order]>();
  var nextProductId = 0;

  public shared ({ caller }) func addProduct(name : Text, price : Nat) : async () {
    let product : Product = {
      name;
      price;
    };
    products.add(nextProductId, product);
    nextProductId += 1;
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    if (quantity == 0) { Runtime.trap("Quantity must be greater than 0") };
    if (products.get(productId) == null) {
      Runtime.trap("Product does not exist");
    };

    let cart : Cart = switch (carts.get(caller)) {
      case (null) {
        { items = [(productId, quantity)] };
      };
      case (?cart) {
        let updatedItems = cart.items.map(
          func(item) {
            if (item.0 == productId) {
              (productId, item.1 + quantity);
            } else {
              item;
            };
          }
        );

        // If product was already in cart, it would be caught by the mapping above.
        let containsProduct = cart.items.find(func(item) { item.0 == productId }) != null;

        if (containsProduct) {
          { items = updatedItems };
        } else {
          { items = cart.items.concat([(productId, quantity)]) };
        };
      };
    };
    carts.add(caller, cart);
  };

  public shared ({ caller }) func placeOrder() : async () {
    switch (carts.get(caller)) {
      case (null) {
        Runtime.trap("Cart is empty");
      };
      case (?cart) {
        var total : Nat = 0;
        for (item in cart.items.values()) {
          let productId = item.0;
          let quantity = item.1;
          if (quantity == 0) {
            Runtime.trap("Quantity must be greater than 0");
          };
          switch (products.get(productId)) {
            case (null) {
              Runtime.trap("Product does not exist");
            };
            case (?product) {
              total += product.price * quantity;
            };
          };
        };

        let order : Order = {
          items = cart.items;
          total;
        };
        switch (orders.get(caller)) {
          case (null) {
            orders.add(caller, [order]);
          };
          case (?existingOrders) {
            orders.add(caller, existingOrders.concat([order]));
          };
        };
        carts.remove(caller);
      };
    };
  };

  public query ({ caller }) func getOrderHistory(user : Principal) : async [Order] {
    switch (orders.get(user)) {
      case (null) { [] };
      case (?orders) { orders };
    };
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray();
  };
};
