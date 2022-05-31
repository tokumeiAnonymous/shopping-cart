const ProductList = [
    {
        id: 1,
        name: 'Low poly spring tree',
        price: 50,
        rating: 4.8,
        seller: 'Trusted Seller',
        comments: [
            {
                userName: 'idontknow',
                comment: 'Very good quality'
            },
            {
                userName: 'definitelynotme',
                comment: 'The best product in town!'
            }
        ],
        imageSrc: '../ItemImages/SpringTree.png'
    },
    {
        id: 2,
        name: 'Low poly autumn tree',
        price: 50,
        rating: 4,
        seller: 'Seller',
        comments: [],
        imageSrc: '../ItemImages/AutumnTree.png'
    },
    {
        id: 3,
        name: 'Wind mill',
        price: 1000,
        rating: -1,
        seller: 'Farmer',
        comments: [],
        imageSrc: 'https://via.placeholder.com/270'
    },
    {
        id: 4,
        name: 'Chess board',
        price: 300,
        rating: 4,
        seller: 'Chess master',
        comments: [],
        imageSrc: 'https://via.placeholder.com/270'
    },
    {
        id: 5,
        name: 'Game character',
        price: 20,
        rating: 5,
        seller: 'Runner',
        comments: [],
        imageSrc: '../ItemImages/Hero.png'
    },
    {
        id: 6,
        name: 'Soil block',
        price: 20,
        rating: 4,
        seller: 'Farmer',
        comments: [],
        imageSrc: '../ItemImages/SoilBlock.png'
    },
    {
        id: 7,
        name: 'Stone block',
        price: 20,
        rating: -1,
        seller: 'Farmer',
        comments: [],
        imageSrc: '../ItemImages/RockBlock.png'
    },
    {
        id: 8,
        name: 'Crate block',
        price: 4,
        rating: 4,
        seller: 'Seaman',
        comments: [],
        imageSrc: '../ItemImages/CrateBlock.png'
    }
]

export default ProductList;