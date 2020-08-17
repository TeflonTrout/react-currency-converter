import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
            <input type='number' className='input' value={amount} onChange={onChangeAmount}/>
            <select className='select' value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option className='option' key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
