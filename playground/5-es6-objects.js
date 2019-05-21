//Object property shorthand 
const name = 'Andrew'

// The property must have the same exactly name as the variable
const product = {
    name,
    price: 4,
    stock: 201,
    label: 'Jezzzz'
}

console.log(product)

// Desctructuring

// label:productLabel -> this is like making an Alias to the property
// rating=5 -> this can be added as new property to the object even if this does not exist in it

const {price, label:productLabel, rating=5} = product

console.log(price, productLabel, rating)

// Destructuring can be done even passed as parameter, parameter here contains default paramenters with the
// equals sign in front of the parameters
const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)