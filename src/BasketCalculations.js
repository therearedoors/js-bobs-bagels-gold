class BasketCalcs {
    constructor(basket) {
        this.basket = basket  
    }

    getItemPrice(variant) {
        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i]
            if(item["variant"] === variant) {
                return inventory[i]
            }
        }
    }

    getTotalOfBasket() {
        let count = 0;
        for (let i = 0; i < this.basket.length; i++) {
            const itemPrice = this.basket[i]["price"]
            count = count + itemPrice
        }
        count = count - this.getDiscount()
        
        return Number(count.toFixed(2))
    }

    getDiscount() {
        let discount = 0;
        const discountOnionArray = this.basket.filter(variant => variant["variant"] === "Onion")
        const everythingitemArray = this.basket.filter(variant => variant["variant"] === "Everything")
        const plainitemArray = this.basket.filter(variant => variant["variant"] === "Plain")
        const discMultiplierOne = Math.trunc(discountOnionArray.length / 6)
        const discMultiplierTwo = Math.trunc(everythingitemArray.length / 6)
        const discMultiplierThree = Math.trunc(plainitemArray.length / 12)
        if (discountOnionArray.length >= 6) {
          discount = discount + (discMultiplierOne*0.45)
        }
        if (everythingitemArray.length >= 6)  {
          discount = discount + (discMultiplierTwo*0.45)
        }
        if (plainitemArray.length >= 12) {
          discount = discount + (discMultiplierThree*0.69)
        }
        return discount
      }

}

module.exports = BasketCalcs