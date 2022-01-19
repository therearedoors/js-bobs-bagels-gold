const BasketCalcs = require("../src/BasketCalculations.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basketCalcs = new BasketCalcs();
  });

it("Special Offer (WET CODE TO CHECK MUTLIPLE DISCOUNTS): 24 plain items (7.98) + 12 Onion items (4.98) + 12 Everything items (4.98)", () => {
    //setup 
    const expected = 7.98 + 4.98 + 4.98
    basket.basketSize = 48
    for (let i = 0; i<24;i++){
      basketCalcs.additemToBasket("Plain")
    }basket.additemToBasket("Onion")
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
    const result = basketCalcs.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });

});