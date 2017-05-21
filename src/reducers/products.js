import {
    UPDATE_PRODUCT_LIST,
    GET_SINGLE_PRODUCT,
    EDITING_PRODUCT

} from '../constants/App'

/*
  Группы товаров
  1  - Спортивное питание
     1.1 - BCA
     1.2 - протеин
     1.3 - витамины
     1.5 прочее
  2 - спортивная одежда
     1.1 Мужская
     1.2 Женская
     1.3 унисекс
  3 - инвентарь для тренировок
     1.1 Лешкая актетика
     1.2 Тяжелая атлетика
     1.6 аксесуары
 */
const allProductsList = {
    'Спортивное питание': {
                'BCAA': [
                {
                    product_name: 'ТВОИ BCAA 2:1:1',
                    product_cost: 510,
                    product_producer: 'Твой Тренер',
                    product_heft: '210 гр.',
                    product_quantity: 10
                },
                {
                    product_name: 'Amino BCAA 4200',
                    product_cost: 2100,
                    product_producer: 'Maxler',
                    product_heft: '900 гр. (400 таб)',
                    product_quantity: 7
                },
                {
                    product_name: 'Pure Protein BCAA',
                    product_cost: 700,
                    product_producer: 'Pure Protein',
                    product_heft: '200 гр.',
                    product_quantity: 8
                },
                {
                    product_name: 'Ultimate Nutrition',
                    product_cost: 900,
                    product_producer: 'Maxler',
                    product_heft: '457 гр.',
                    product_quantity: 5
                },
                {
                    product_name: 'Ultimate BCAA',
                    product_cost: 600,
                    product_producer: 'CULT',
                    product_heft: '250 гр.',
                    product_quantity: 15
                }
            ],
            'Протеин': [
                {
                    product_name: 'ProStar Whey Protein',
                    product_cost: 1890,
                    product_producer: 'Ultimate Nutrition',
                    product_heft: '2400 гр.',
                    product_quantity: 10
                },
                {
                    product_name: 'ТВОЙ Мицеллярный Казеин',
                    product_cost: 1690,
                    product_producer: 'Твой Тренер ',
                    product_heft: '1000 гр.',
                    product_quantity: 10
                },
                {
                    product_name: 'ТВОЙ Сывороточный протеин',
                    product_cost: 1700,
                    product_producer: 'Твой Тренер',
                    product_heft: '1000 гр.',
                    product_quantity: 10
                }
            ],
            'Витамины': [
                {
                    product_name: 'Optimum Nutrition Opti-Men',
                    product_cost: 1800,
                    product_producer: 'Ultimate Nutrition',
                    product_heft: '50 порций (150 табл.)',
                    product_quantity: 10
                },
                {
                    product_name: 'MuscleTech Platinum Multivitamin',
                    product_cost: 1500,
                    product_producer: 'MuscleTech',
                    product_heft: '30 порций (90 табл.)',
                    product_quantity: 10
                }

            ],
            'Прочее': [
                {
                    product_name: 'Жиросжигатель Нутрекс: Липо-6 Блэк Хёрс',
                    product_cost: 2200,
                    product_producer: 'Нутрекс',
                    product_heft: '120 капсул',
                    product_quantity: 10
                },

            ]
},
//     'Cпортивная одежда': {
//
//             'Мужская': [
//                 {
//                     product_name: 'Мужская футболка ZAVOD',
//                     product_cost: 400,
//                     product_producer: 'ZAVOD',
//                     product_quantity: 10
//                 }
//             ]
//         ,
//
//             'Женская': [
//                 {
//                     product_name: 'Женская футболка ZAVOD',
//                     product_cost: 400,
//                     product_producer: 'ZAVOD',
//                     product_quantity: 10
//                 }
//             ]
//         ,
//
//             'Унисекс': [
//                 {
//                     product_name: 'Кепка ZAVOD',
//                     product_cost: 200,
//                     product_producer: 'ZAVOD',
//                     product_quantity: 10
//                 }
//             ]
//
// },
//     'Инвентарь для тренировок': {
//
//             'Легкая атлетика': [
//                 {
//                     product_name: 'Гетры',
//                     product_cost: 300,
//                     product_producer: 'ZAVOD',
//                     product_quantity: 10
//                 }
//             ]
//         ,
//
//             'Тяжелая атлетика': [
//                 {
//                     product_name: 'Пояс атлетический',
//                     product_cost: 1500,
//                     product_producer: 'Green Hill',
//                     product_quantity: 5
//                 }
//             ]
//         ,
//
//             'Аксесуары': [
//                 {
//                     product_name: 'Бытылка для воды',
//                     product_cost: 300,
//                     product_producer: 'ZAVOD',
//                     product_quantity: 5
//                 }
//             ]
//
//     },
}

export default function products(state = {allProductsList: allProductsList, productData: null }, action) {
    switch (action.type){
        case UPDATE_PRODUCT_LIST:
            return {...state, allProductsList: action.data}
        case EDITING_PRODUCT:
            return {...state, productData: action.data}
        case GET_SINGLE_PRODUCT:
            return {...state, productData: action.data}
        default:
            return state
    }
}

