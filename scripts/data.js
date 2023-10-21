export const products = [
  {
    id: 1,
    title: 'Футболка UZcotton мужская',
    fullPrice: 1051,
    discount: [
      {
        type: 'Скидка 55%',
        value: 0.55
      },
      {
        type: 'Скидка покупателя 10%',
        value: 0.1
      }
    ],
    count: 1,
    availability: 2,
    color: 'Белый',
    size: 56,
    warehouse: 'Коледино WB',
    organization: 'OOO Вайлдберриз',
    image: './images/t-shirt.png',
    isChecked: true,
    deliveryTime: [
      {
        date: '5—6 февраля',
        maxAmount: 2
      }
    ]
  },
  {
    id: 2,
    title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    fullPrice: 11500,
    discount: [
      {
        type: 'Скидка 55%',
        value: 0.55
      },
      {
        type: 'Скидка покупателя 10%',
        value: 0.1
      }
    ],
    count: 1,
    availability: 200,
    color: 'прозрачный',
    size: null,
    warehouse: 'Коледино WB',
    organization: 'OOO Мегапрофстиль',
    image: './images/case.png',
    isChecked: true,
    deliveryTime: [
      {
        date: '5—6 февраля',
        maxAmount: 184
      },
      {
        date: '7-8 февраля',
        maxAmount: 16
      }
    ]
  },
  {
    id: 3,
    title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    fullPrice: 475,
    discount: [
      {
        type: 'Скидка 55%',
        value: 0.55
      },
      {
        type: 'Скидка покупателя 10%',
        value: 0.1
      }
    ],
    count: 1,
    availability: 2,
    color: null,
    size: null,
    warehouse: 'Коледино WB',
    organization: 'OOO Вайлдберриз',
    image: './images/pencils.png',
    isChecked: true,
    deliveryTime: [
      {
        date: '5—6 февраля',
        maxAmount: 2
      }
    ]
  },
]