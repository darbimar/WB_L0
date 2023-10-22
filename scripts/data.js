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
    organization: {
      name: 'OOO Вайлдберриз',
      OGRN: 1067746062449,
      address: '142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1'
    },
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
    organization: {
      name: 'OOO Мегапрофстиль',
      OGRN: 5167746237148,
      address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
    },
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
    organization: {
      name: 'OOO Вайлдберриз',
      OGRN: 1067746062449,
      address: '142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1'
    },
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

export const deliveryInfo = [
  {
    type: 'В пункт выдачи',
    addressList: [
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
      'г. Бишкек, улица Табышалиева, д. 57'
    ]
  },
  {
    type: 'Курьером',
    addressList: [
      'Бишкек, улица Табышалиева, 57',
      'Бишкек, улица Жукеева-Пудовкина, 77/1',
      'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1'
    ]
  }
]

export const paymentInfo = [
  {
    name: 'mir',
    logo: './images/mir.svg',
    number: '1234 56•• •••• 1234'
  },
  {
    name: 'visa',
    logo: './images/visa.svg',
    number: '1234 56•• •••• 1234'
  },
  {
    name: 'mastercard',
    logo: './images/mastercard.svg',
    number: '1234 56•• •••• 1234'
  },
  {
    name: 'maestro',
    logo: './images/maestro.svg',
    number: '1234 56•• •••• 1234'
  }
]