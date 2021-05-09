import React from 'react'

export default function Cards({ data }) {
  return (
    <div className="cards d-table w-100">
      <div className='d-table-row'>
        {data.map(({ id, header, options }) =>
          <div className='card d-table-cell w-33 border border-bottom-0' key={id}>
            <h2 className='card__header'>{header}</h2>
            <ul>
              {options.map((option, i) => <li key={i}>{option}</li>)}
            </ul>
          </div>
        )}
      </div>
      <div className='d-table-row'>
        {data.map(({ id, text }) =>
          <div className='card d-table-cell w-33 border border-top-0' key={id}>{text}</div>
        )}
      </div>
    </div>
  )
}