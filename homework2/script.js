class GoodsItem {
    constructor(title, description, price) {
      this.title = title;
      this.description = description;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><h4>${this.description}</h4><p>${this.price}</p></div>`;
    }
  }
  
  class GoodsList {
    constructor() {
      this.goods = [];
    }
  
    fetchGoods() {
      this.goods = [
        { title: "Shirt", description: "Description", price: 150 },
        { title: "Socks", description: "Description", price: 50 },
        { title: "Jacket", description: "Description", price: 350 },
        { title: "Shoes", description: "Description", price: 250 },
      ];
    }
  
    render() {
      let listHtml = "";
      this.goods.forEach((good) => {
        const goodItem = new GoodsItem(good.title, good.description, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector(".goods-list").innerHTML = listHtml;
    }

    // hw
    
    summaryPrice() {
        let sumPrice = 0
        for (let i = 0; i < this.goods.length; i++) {
            sumPrice += this.goods[i].price
        }
        console.log(sumPrice)
    }
  }

  class BasketSvg {
      constructor(quantity, color, image) {
        this.quantity = quantity;
        this.color = color;
        this.image = image;
      }
      thingsQuantity(){

      }
      changeColor(){

      }
  }

  class Basket {
      constructor() {

      }
      totalPrice() {

      }
      totalSale(){

      }
      clearBasket() {

      }
  }
  
  const init = () => {
      const list = new GoodsList();
      list.fetchGoods();
      list.render();
      list.summaryPrice();
  };
  
  window.onload = init;
  