const products = [
    {
        id: '1',
        name: 'Playera Tiranos',
        price: 250,
        category: 'playeras',
        img: 'https://trainerdog.es/wp-content/uploads/2021/01/binoculares_vortex_viper_hd_5482-1.jpg',
        stock: 25,
        description: 'Descripción de Playera Tiranos'
    },
    { id: '2', name: 'Gorra Tiranos', price: 250, category: 'gorras', img: 'https://trainerdog.es/wp-content/uploads/2021/01/binoculares_vortex_viper_hd_5482-1.jpg', stock: 13, description: 'Descripción de Gorra Tiranos'},
    { id: '3', name: 'Aretes', price: 150, category: 'accesorios', img: 'https://trainerdog.es/wp-content/uploads/2021/01/binoculares_vortex_viper_hd_5482-1.jpg', stock:22}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 500)
    })
}