module.exports = function() {
    return "Hello"
}


/*
const calculatedComission = (revenue) =>{
    let tier = tiers.find((tier)=>tier.highRange <= revenue && revenue <= tier.topRange)
    if(tier == null){
        let xs = revenue-500000
        let xsFeeAsMoney = 0.035*xs
        let moneyToPay = xsFeeAsMoney+22825;
        return Math.round(((moneyToPay/revenue)*100)*100)/100
    } 
    let xs = revenue-tier.highRange
    let xsFeeAsMoney = tier.xsFee*xs
    let moneyToPay = xsFeeAsMoney+tier.baseFee;
    return Math.round(((moneyToPay/revenue)*100)*100)/100
}
*/