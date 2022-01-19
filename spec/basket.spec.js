const Basket = require("../src/Basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });
  it("checking contents of basket", () => {
    //setup 
    const expected = []
    //execute 
    basket.basket
    const emptybasket = basket.basket
    //verify
    expect(emptybasket).toEqual(expected);
  });
  it("Add one item to basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLO",
      "price": 0.49,
      "name": "item",
      "variant": "Onion"
    }
    ]
    //execute 
    basket.additemToBasket("Onion")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Add two items to basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLO",
      "price": 0.49,
      "name": "item",
      "variant": "Onion"
    },
    {
      "sku": "BGLP",
      "price": 0.39,
      "name": "item",
      "variant": "Plain"
    },
    ]
    //execute 
    basket.additemToBasket("Onion")
    basket.additemToBasket("Plain")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove one item from basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLP",
      "price": 0.39,
      "name": "item",
      "variant": "Plain"
    }
    ]
    basket.additemToBasket("Plain")
    basket.additemToBasket("Blueberry")
    //execute 
    basket.removeitemFromBasket("Blueberry")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove multiple items from basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLB",
      "price": 0.49,
      "name": "item",
      "variant": "Blueberry"
    }
    ]
    basket.additemToBasket("Onion")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Garlic")
    basket.additemToBasket("Blueberry")
    //execute 
    basket.removeitemFromBasket("Onion")
    basket.removeitemFromBasket("Plain")
    basket.removeitemFromBasket("Garlic")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Add one item then remove it returns empty", () => {
    //setup 
    const expected = [
    ]
    //execute 
    basket.additemToBasket("Blueberry")
    basket.removeitemFromBasket("Blueberry")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Adding items to a full basket returns error", () => {
    //setup 
    basket.additemToBasket("Blueberry")
    basket.additemToBasket("Garlic")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    //execute    
    const result = basket.additemToBasket("Asiago")
    //verify
    expect(result).toEqual("Basket is full!");
  });
  it("overfilling my basket results in a full basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLS",
      "price": 0.49,
      "name": "item",
      "variant": "Sesame"
    },
    {
      "sku": "BGLA",
      "price": 0.99,
      "name": "item",
      "variant": "Asiago"
    },
    {
      "sku": "BGLG",
      "price": 0.99,
      "name": "item",
      "variant": "Garlic",
    },
    {
      "sku": "BGLW",
      "price": 0.99,
      "name": "item",
      "variant": "Whole Wheat",
    },
    {
      "sku": "BGLP",
      "price": 0.39,
      "name": "item",
      "variant": "Plain"
    }
    ]
    basket.additemToBasket("Sesame")
    basket.additemToBasket("Asiago")
    basket.additemToBasket("Garlic")
    basket.additemToBasket("Whole Wheat")
    basket.additemToBasket("Plain")
    //execute
    basket.additemToBasket("Blueberry") // blueberry should not be added to basket.
    const result = basket.basket
    //verify
    expect(result).toEqual(expected)
    expect(basket.basket.length).toEqual(5)
  });
  it("Adding two of the same item to my basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLB",
      "price": 0.49,
      "name": "item",
      "variant": "Blueberry"
    },
    {
      "sku": "BGLB",
      "price": 0.49,
      "name": "item",
      "variant": "Blueberry"
    }
    ]
    //execute 
    basket.additemToBasket("Blueberry")
    basket.additemToBasket("Blueberry")
    const result = basket.basket
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove a item that doesn't exist returns an error.", () => {
    //setup 
    basket.additemToBasket("Plain")
    //execute 
    const result = basket.removeitemFromBasket("Onion")
    //verify
    expect(result).toEqual("Onion item doesn't exist");
  });
  it("Manager increasing the size of basket", () => {
    //setup 
    const expected = 15
    basket.setBasketSize("large")
    //execute 
    const result = basket.basketSize
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of one item in my basket.", () => {
    //setup 
    const expected = 0.99
    basket.additemToBasket("Asiago")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of multiple items in my basket.", () => {
    //setup 
    const expected = 0.39 + 0.49 + 0.49  
    basket.additemToBasket("Plain")
    basket.additemToBasket("Blueberry")
    basket.additemToBasket("Sesame")
    basket.additemToBasket("Asiago")
    basket.removeitemFromBasket("Asiago")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Checking the price of a item before adding it to my basket.", () => {
    //setup 
    const expected = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "item",
      "variant": "Onion"
    }
    //execute 
    const result = basket.getitemPrice("Onion")
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 6 Onion items should be £2.49", () => {
    //setup 
    const expected = 2.49
    basket.basketSize = 6
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 6 Everything items should be £2.49", () => {
    //setup 
    const expected = 2.49
    basket.basketSize = 6
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 12 Plain items should be £3.99", () => {
    //setup 
    const expected = 3.99
    basket.basketSize = 12
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer (WET CODE TO CHECK MUTLIPLE DISCOUNTS): 24 plain items (7.98) + 12 Onion items (4.98) + 12 Everything items (4.98)", () => {
    //setup 
    const expected = 7.98 + 4.98 + 4.98
    basket.basketSize = 48
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Plain")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Onion")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    basket.additemToBasket("Everything")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
});