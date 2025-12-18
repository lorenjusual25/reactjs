const productos = [
    {
        id: "01",
        name: 'Producto 1',
        category: 'celulares',
        price: 100,
        img: 'phone.png',
        detail: 'Esto es el detalle del producto 1'
    },
    {
        id: "02",
        name: 'Producto 2',
        category: 'computadoras',
        price: 200,
        img: 'notebook.png',
        detail: 'Esto es el detalle del producto 2'
    },
    {
        id: "03",
        name: 'Producto 3',
        category: 'consolas',
        price: 300,
        img: 'console.png',
        detail: 'Esto es el detalle del producto 3'
    },
    {
        id: "04",
        name: 'Producto 4',
        category: 'celulares',
        price: 150,
        img: 'phone.png',
        detail: 'Esto es el detalle del producto 4'
    },
    {
        id:"05",
        name: 'Producto 5',
        category: 'computadoras',
        price: 250,
        img: 'notebook.png',
        detail: 'Esto es el detalle del producto 5'
    },
    {
        id: "06",
        name: 'Producto 6',
        category: 'consolas',
        price: 350,
        img: 'console.png',
        detail: 'Esto es el detalle del producto 6'
    },
    {
        id: "07",
        name: 'Producto 7',
        category: 'celulares',
        price: 120,
        img: 'phone.png',
        detail: 'Esto es el detalle del producto 7'
    },
    {
        id:"08",
        name: 'Producto 8',
        category: 'computadoras',
        price: 220,
        img: 'notebook.png',
        detail: 'Esto es el detalle del producto 8'
    },
    {
        id:"09",
        name: 'Producto 9',
        category: 'consolas',
        price: 320,
        img: 'console.png',
        detail: 'Esto es el detalle del producto 9'
    }
]
export function getProducts () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },1000)
    })
}
export function getProductById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prod = productos.find (p => p.id === id)
            if (prod)
                resolve(prod)
            else
                reject(new Error("Producto no encontrado"))
        },1000)
    })
}
export function getProduct (name) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(p => p.name === name))
        },1000)
    })
}
export function getProductsByCategory (category) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const prodsFiltrados = productos.filter(p => p.category == category)
            if (prodsFiltrados.length === 0)
                reject(new Error ("No se encontraron productos de esta categoria"))
            else
                resolve(prodsFiltrados)
        },1000)
    })
}