const allProductsMock = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    user_id: 1,
  },
  {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    user_id: 1,
  },
  {
    id: 3,
    name: 'Lira de Orfeu',
    price: '1 peça de ouro',
    user_id: 2,
  },
  {
    id: 4,
    name: 'Armadura de Aquiles',
    price: '1 peça de ouro',
    user_id: 2,
  },
  {
    id: 5,
    name: 'Harpa de Dagda',
    price: '15 peças de ouro',
    user_id: 3,
  },
];

const nameTest = 'New product name';
const priceTest = 'New product price';
const userIdTest = 1;

const createNewProductMock = {
  name: nameTest,
  price: priceTest,
  userId: userIdTest,
};

const newProductReturnMock = {
  id: 1,
  name: nameTest,
  price: priceTest,
  userId: userIdTest,
};

const noNameProductBody = {
  name: '',
  price: priceTest,
  userId: userIdTest,
};

const noPriceProductBody = {
  name: nameTest,
  price: '',
  userId: userIdTest,
};

export default {
  allProductsMock,
  createNewProductMock,
  newProductReturnMock,
  noNameProductBody,
  noPriceProductBody,
};