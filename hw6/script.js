const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const basketQuantity = 5;

Vue.component('product-list', {
    props: ['goods'],
    template: `
      <div class="lots__cardbox center" v-if="goods.length !== 0">
        <products-item 
          v-for="item in goods"
          :goodProp="item"
          :key="item.id_product"
          @mouse-click="getClickOfProductsItem"
        >
        </products-item>
      </div>
    `,
  
    methods: {
      getClickOfProductsItem() {
        const clickEvent = event
        this.$emit('mouse-click', clickEvent)
    }
    }
});

Vue.component('products-item', {
    props: ['goodProp'],
    template: `
    <div class="lots__card" :itemId="goodProp.id_product">
          <div class="">
            <img class="lots__img" src="img/card1.png" alt="Product" width="360" height="420">
            <button v-on:click="$emit('mouse-click', $event)" class="lots__add" type="button">
              <svg class="lots__cart" width="27" height="25" viewBox="0 0 27 25" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
                  fill="white" />
              </svg>
              Add to Cart
            </button>
          </div>
          <div class="lots__info">
            <h3 class="lots__name">
              <a class="lots__link" href="#">
                {{goodProp.product_name}}
              </a>
            </h3>
            <div class="lots__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym
              Ellery teams up with Moda Operandi.
            </div>
            <div class="lots__price">
              {{goodProp.price}}
            </div>
          </div>
    </div>
    `
});

Vue.component('form-serch', {
    data() {
      return {
        searchLine: '',
        filteredProduct: []
      }
    },
  
    props: ['product'],
  
    template: `
    <div class="header__left">
    <input v-model="searchLine" type="search" id="serch" placeholder="Введите название товара">
    <button class="cart__action" @click="filterGoods">Поиск</button>
  </div>
    `,
    methods: {
        /** Поиск товаров */
        filterGoods () {
            this.filteredProduct = [];
            this.product.forEach(good => {
              if(good.product_name.toUpperCase().indexOf(this.searchLine.toUpperCase()) !== -1) {
                this.filteredProduct.push(good);
              }
            })
      
            this.$emit('products', this.filteredProduct)
          },
        }
    });

Vue.component('basket', {
    data() {
        return {
        goodsBasket: [],
        basket: [],
        sumGoods: '',
        }
    },
    props: ['goods'],
    
    template: `
    <section class="basket center" v-if="goodsBasket.length !== 0">
    <div class="" v-for="item in basket">
      <div class="" itemid="456">
        <div class=""></div>
        <h3> {{item.product_name}} </h3>
        <p> {{item.price}} </p>
        <span class="header__amount-good"> {{sortingGood(item.id_product)}} </span>
        <button v-on:click="removeGood(item.id_product)" type="button" class="">
          clear
        </button>
      </div>
    </div>
    <div class="">
      <div class="">
        <div class="">Total price:</div>
        <div class=""> {{totalSum()}} </div>
      </div>
    </div>
  </section>
  `,

  methods: {
    /** Добавление в корзину */
    addGood(event) {
        for (let i = 0; i < this.goods.length; i++) {
            let idProduct = this.goods[i].id_product;
    
            if (idProduct === +event.path[2].attributes[0].value) {
                this.goodsBasket.push(this.goods[i]);
            };
        }
    
        this.basket = this.UniqueValues(this.goodsBasket);
        this.calculateGoods()
    },
    
    /** Уникальные значения в массиве */
    UniqueValues(arrValues) {
        return [...new Set(arrValues)];
    },
    
    /** Сумма товаров в корзине */
    totalSum() {
        let sum = 0;
        this.goodsBasket.forEach((good) => {
            sum += good.price;
        });
        return sum;
    },
    
    /** Счетчик на svg корзины */
    calculateGoods() {
        if (this.goodsBasket.length > basketQuantity) {
            this.sumGoods = `${basketQuantity}+`;
        }
        else {
            this.sumGoods = this.goodsBasket.length;
        }

        this.$emit('amount-goods', this.sumGoods)
    },
    
    /** Количество товара в корзине */
    sortingGood(id) {
        let arr = [];
        this.goodsBasket.forEach((item) => {
            if (item.id_product === +id) {
                arr.push(item);
            };
        });
        return arr.length
    },
    
    /** Убрать товар из корзины */
    removeGood(idGood) {
        for (let i = this.goodsBasket.length - 1; i >= 0; i--) {
            if (this.goodsBasket[i].id_product === +idGood) {
                this.goodsBasket.splice([i], 1);
                break;
            };
        };
        this.basket = this.UniqueValues(this.goodsBasket);
        this.calculateGoods()
    }
    },
});


const app = new Vue({

    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        sumGoods: '',
    },

    methods: {
        /** Запрашиваем json с сервера */
        async getProducts() {
            const responce = await fetch(`${API_URL}/catalogData.json`);
            if (responce.ok) {
                const catalogItems = await responce.json();
                this.goods = catalogItems;
                this.filteredGoods = catalogItems;
            } else {
                alert("Ошибка при соединении с сервером");
            }
        },

        getFilteredGoods(product) {
            this.filteredGoods = product;
          },

        getClickOfProductsItem() {
            this.$refs.basket.addGood(event);
        },

        getAmountGoods(amountGoods) {
            this.sumGoods = amountGoods;
          }
        },

    async mounted() {
        await this.getProducts();
    }
});