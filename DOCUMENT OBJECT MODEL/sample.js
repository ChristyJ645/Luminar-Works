let product={
    code:1000,
    name:"mouse",
    brand:"hp",
    price:500,
}

localStorage.setItem(product.code.JSON.stringify(product))

let item=localStorage.getItem(product.code)


let person={
name:"akhil",
course:"meanstack",
joining_date:"12/6/21"
}

localStorage.setItem(person.name.JSON.stringify(person))
let name="akhil"