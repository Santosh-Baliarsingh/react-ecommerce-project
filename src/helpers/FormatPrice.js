// COnvert Price into Local Currency
const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-IN" , {
    style : "currency",
    currency : "INR",
    minimumFractionDigits : 2,
  }).format(price/100)
};

export default FormatPrice;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// In India  1 rupee = 100 paisa
// convert paisa into rupees => Rupee = Paisa/100
