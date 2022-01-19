const inventory = require('./inventory.js')
const sizes = {
  small: 5,
  medium: 10,
  large: 15
  }



class Basket {
  constructor() {
    this.basket = [];
    this.basketSize = sizes.small;
  }

  additemToBasket(variant) {
    for (let i = 0; i < inventory.length; i++){
      const item = inventory[i]
      if (item["variant"] === variant && !this.isFull()) {
        this.basket.push(item)
        return
      }
    }
    return "Basket is full!"
     
  }

  setBasketSize(size){
    if (!sizes.hasOwnProperty(size)){
      return "Invalid size, please enter small, medium or large"
    }
    this.basketSize = sizes[`${size}`]
    return
  }

  isFull(){
    return this.basket.length === this.basketSize
  }

  removeitemFromBasket(variant) {
    //console.log(this.basket.find(e => e.variant));
    if(!this.findItemInBasket(variant)){
    return `${variant} item doesn't exist`
    }
    for (let i = 0; i < this.basket.length; i++) {
      const itemToRemove = this.basket[i];
      if (itemToRemove.variant === variant) {
        this.basket.splice(i, 1);
      }
    }
  }

  findItemInBasket(variant){
   return this.basket.find(e => e.variant === variant)
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

  getitemPrice(variant) {
      for (let i = 0; i < inventory.length; i++) {
          const item = inventory[i]
          if(item["variant"] === variant) {
              return inventory[i]
          }
      }
  }
  /*
  getBasket() {
    return this.basket;
  }
  */
}

module.exports = Basket;
