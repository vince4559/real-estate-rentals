 const Format_currency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    // style: 'currency'
})


const FormatPrice = (number: number) => {
    return Format_currency.format(number)
}

export default FormatPrice
