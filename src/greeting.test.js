const greeting = require('./greeting')
const expect = require("expect");



/*Comienzo de partido */


test('Start Game Love-All',()=>{
    const game=new TennisGame(0,0);
    expect(game.getScore()).toBe("Love-All")
})

test('0-15',()=>{
    const game=new TennisGame(0,1);
    expect(game.getScore()).toBe("Love-15")
})

test('0-30',()=>{
    const game=new TennisGame(0,2);
    expect(game.getScore()).toBe("Love-30")
})

test('0-40',()=>{
    const game=new TennisGame(0,3);
    expect(game.getScore()).toBe("Love-40")
})

test('Game player Two',()=>{
    const game=new TennisGame(0,4);
    expect(game.getScore()).toBe("Game Player Two")
})


test('15-0',()=>{
    const game=new TennisGame(1,0);
    expect(game.getScore()).toBe("15-Love")
})

test('15-15',()=>{
    const game=new TennisGame(1,1);
    expect(game.getScore()).toBe("15-All")
})

test('15-30',()=>{
    const game=new TennisGame(1,2);
    expect(game.getScore()).toBe("15-30")
})

test('15-40',()=>{
    const game=new TennisGame(1,3);
    expect(game.getScore()).toBe("15-40")
})

test('Game Player Two on Player One 15',()=>{
    const game=new TennisGame(1,4);
    expect(game.getScore()).toBe("Game Player Two")
})

test('30-0',()=>{
    const game=new TennisGame(2,0);
    expect(game.getScore()).toBe("30-Love")
})

test('30-15',()=>{
    const game=new TennisGame(2,1);
    expect(game.getScore()).toBe("30-15")
})

test('30-30',()=>{
    const game=new TennisGame(2,2);
    expect(game.getScore()).toBe("30-All")
})

test('30-40',()=>{
    const game=new TennisGame(2,3);
    expect(game.getScore()).toBe("30-40")
})

test('Game Player Two on Player One 30',()=>{
    const game=new TennisGame(2,4);
    expect(game.getScore()).toBe("Game Player Two")
})

test('40-0',()=>{
    const game=new TennisGame(3,0);
    expect(game.getScore()).toBe("40-Love")
})

test('40-15',()=>{
    const game=new TennisGame(3,1);
    expect(game.getScore()).toBe("40-15")
})


test('40-30',()=>{
    const game=new TennisGame(3,2);
    expect(game.getScore()).toBe("40-30")
})

test('40-40',()=>{
    const game=new TennisGame(3,3);
    expect(game.getScore()).toBe("Deuce")
})

test('Adv2',()=>{
    const game=new TennisGame(3,4); /*Ventaja para el 2 adv2 */
    expect(game.getScore()).toBe("Adv2")
})

test('Game Player Two after Deuce',()=>{
    const game=new TennisGame(3,5); /*Gana el 1 por adv1 */
    expect(game.getScore()).toBe("Game Player Two Deuce")
})


test('Game Player One',()=>{
    const game=new TennisGame(4,0);
    expect(game.getScore()).toBe("Game Player One")
})

test('Game Player One',()=>{
    const game=new TennisGame(4,1);
    expect(game.getScore()).toBe("Game Player One")
})

test('Game Player One',()=>{
    const game=new TennisGame(4,2);
    expect(game.getScore()).toBe("Game Player One")
})

test('Adv1',()=>{
    const game=new TennisGame(4,3); /*Ventaja para el 1 adv1 */
    expect(game.getScore()).toBe("Adv1")
})

test('Game Player One after Deuce',()=>{
    const game=new TennisGame(5,3); /*Gana el 1 por adv1 */
    expect(game.getScore()).toBe("Game Player One Deuce")
})




class TennisGame{
    constructor(scorePlayerOne,scorePlayerTwo){
        this.scorePlayerOne=scorePlayerOne;
        this.scorePlayerTwo=scorePlayerTwo;
    }

   wonPoint(player){
        return this.score++;
    }

    getScore(){
        let Win1="Game Player One Deuce" 
        let Win2="Game Player Two Deuce"
        let GameP1="Game Player One"
        let GameP2="Game Player Two"
        /*Empates */
        let Loveall="Love-All"
        let QAll="15-All"
        let Tall="30-All"
        let Deuce="Deuce"
        /*Diferencias */
        let L15="Love-15"
        let L30="Love-30"
        let L40="Love-40"
        
        /*Caluclo de Diferencia */
        if (this.scorePlayerOne>=3 && this.scorePlayerTwo>=3){  /*Deuce y victoria por deuce */
            if (this.Diferencia1()==2){
                return Win1
            }
            if (this.Diferencia2()==2){
                return Win2
            }
            if(diferencia1==0 || diferencia2==0){
                return Deuce
            }
        }
        if (this.scorePlayerOne==4 && this.scorePlayerTwo<3){ /*victorias de p1 */
            return GameP1
        }
        if (this.scorePlayerOne<3 && this.scorePlayerTwo==4){ /*victorias de p2 */
            return GameP2
        }
        if (this.scorePlayerOne==0 && this.scorePlayerTwo==0){ /*Empate en 0 */
            return Loveall
        }
        if (this.scorePlayerOne==1 && this.scorePlayerTwo==1){ /*Empate en 0 */
            return QAll
        }
        if (this.scorePlayerOne==2 && this.scorePlayerTwo==2){ /*Empate en 0 */
            return Tall
        }
    }

    Diferencia2() {
        return this.scorePlayerTwo - this.scorePlayerOne;
    }

    Diferencia1() {
        return this.scorePlayerOne - this.scorePlayerTwo;
    }
}



/*
class Tier{
    constructor(topRange,baseFee,xsFee,highRange){
        this.topRange = topRange;
        this.baseFee = baseFee;
        this.xsFee = xsFee;
        this.highRange = highRange;
    }

    getComissionFromXS(revenue){
        return this.xsFee * this.getXS(revenue)
    }

    getMoneyToPay(revenue){
        return this.getComissionFromXS(revenue) + this.baseFee
    }
}

const tiers = [
    /*
    new Tier(10000,0,.10,0),
    new Tier(40000,1000,.09,10000),
    new Tier(85000,3700,.08,40000),
    new Tier(100000,7300,.07,85000),
    new Tier(125000,8350,.06,100000),
    new Tier(150000,9850,.05,125000),
    new Tier(250000,11100,.041,150000),
    new Tier(400000,15200,.0325,250000),
    new Tier(500000,20075,.0275,400000),
    new Tier(-1,22825,.035,500000)
    
]

const calculatedComission = (revenue) =>{
    let tier = tiers.find(withinRange(revenue))
    if(tier == null){
        tier = tiers[tiers.length-1]
    }
    return getCommision(tier.getMoneyToPay(revenue),revenue)
}

const withinRange = (revenue) => (tier) => revenue <= tier.topRange
const getCommision = (howMuchToPay, revenue) => Math.round(((howMuchToPay/revenue)*100)*100)/100

*/