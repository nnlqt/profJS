const init = () => {
    const bigStr = "Lore'm ipsum dolo'r sit 'amet consectetur adipisicing' elit. Maxime rerum non unde repellat itaque error, at ducimus? Sint cumque illo architecto cum ullam cupiditate fugit obcaecati quis dolor vel inventore similique saepe facere expedita temporibus error, voluptatum quasi blanditiis, 'labore quisquam exercitationem commodi accusantium sunt! Explicabo placeat sint' labore consequatur assumenda fugiat nam unde, aut officiis totam aliquam accusantium aliquid ea architecto distinctio impedit! Veniam eum cum aliquid sint, ipsum doloremque ullam soluta voluptatum quam quaerat earum distinctio dicta fuga animi debitis minima molestias amet! Quam vitae, explicabo, cupiditate, culpa ipsa voluptatem neque aliquam alias mollitia illo maxime aspernatur. Repellendus!"
    const firstRegExp = /\B'|'\B/g
    const newBigStr = bigStr.replace(firstRegExp, '"')
    console.log(newBigStr)

    const name = document.querySelector("name")
    const tel = document.querySelector("tel")
    const mail = document.querySelector("mail")

    const nameRegExp = /^[a-zа-яё]{2,}$/i
    console.log(nameRegExp.test(name))

    const telRegExp = /\+\d{1,4}\(?\d{3}\)?\d{3}-?\d{4}\b/
    console.log(telRegExp.test(tel))

    const mailRegExp = /(^\w+(|(\.|\-)\w+))(?=@[a-z]{2,}\.[a-z]{2,4}\b)/i
    console.log(mailRegExp.test(mail))
    }
window.onload = init;