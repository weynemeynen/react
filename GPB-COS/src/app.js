import React, { useEffect, useState } from 'react'

import { dataApi } from '~/api'

import Cards from '~c/cards'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataApi)
  }, [dataApi])

  return (
    <div className='container'>
      <h1>Задание 1 (*)</h1>
      <hr />
      <p>Необходимо на создать страницу отображающую список компонентов с помощью библиотеки React. Каждый компонентов состоит из трех частей: заголовок, список, текстовое описание.</p>
      <Cards data={data} />
      <p>Данные передаются с сервера в виде JSON-структуры</p>
      <p>Страница должна:</p>
      <ul>
        <li>позволять пользователю удобно просматривать несколько компонентов одновременно;</li>
        <li>
          быть адаптивной к разному размеру списков внутри компонентов, длине текста;</li>
        <li>быть кросбраузерной и работать в IE9+;</li>
        <li>обеспечить возможность применения в других страницах</li>
      </ul>
    </div>
  )
}