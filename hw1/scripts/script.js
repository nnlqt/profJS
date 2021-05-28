const goods = [
    { title: 'JACKET', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$150" },
    { title: 'SUIT', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$400" },
    { title: 'HOODIE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$350" },
    { title: 'POLO', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$250" },
    { title: 'BLAZER', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$230" },
    { title: 'BLOUSE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: "$180" },
  ]

  const renderGoodsItem = (title, description, price) => {
    return `<a href="#"><div class="lots__name">${title}</div></a><div class="lots__description">${description}</div><div class="lots__price">${price}</div>`
  }

  const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.description, item.price))
    for (let i = 0; i < goods.length; i++) {
        document.querySelector(`.lots__info${i}`).insertAdjacentHTML("afterbegin", goodsList[i])
    }
  }

  const init = () => {
    renderGoodsList(goods)
  }
  
  window.onload = init