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
        let { Loveall, L15, L30, L40, ql, QAll, q30, q40, tl, t15, Tall, t40, cl, c15, c30, Win1, Win2, adv1, adv2, Deuce, GameP1, GameP2 } = this.Resultados(); /*4-3 */
        
        /*Todos Los Test */
       if (this.LoveAll()){ /*Empate en 0-0 */
            return Loveall
        }
        if (this.Love15()){ /*0-15*/
            return L15
        }
        if (this.Love30()){ /*0-30 */
            return L30
        }
        if (this.Love40()){/*0-40 */
            return L40
        }
        if (this.QLove()){ /*15-0 */
            return ql
        }
        if (this.QAll()){ /*Empate en 15-15 */
            return QAll
        }
        if (this.Q30()){ /*Empate en 15-30 */
            return q30
        }
        if (this.Q40()){ /*15-40 */
            return q40
        }
        if (this.TLove()){/*30-0 */
            return tl
        }
        if (this.T15()){ /*30-15 */
            return t15
        }
        if (this.TAll()){ /*Empate en 30-30 */
            return Tall
        }
        if (this.T40()){ /*30-40 */
            return t40
        }
        if (this.CLove()){ /*40-0 */
            return cl
        }
        if (this.C15()){ /*40-15 */
            return c15
        }
        if (this.C30()){ /*40-30 */
            return c30
        }

        if (this.Deuce()){  /*Deuce y victoria por deuce */
            if (this.Diferencia1()==2){ /*60-40 */
                return Win1  
            }
            if (this.Diferencia2()==2){ /*40-60 */
                return Win2
            }
            if (this.Diferencia1()==1){ /*60-40 */
                return adv1  
            }
            if (this.Diferencia2()==1){ /*40-60 */
                return adv2
            }
            if (this.Diferencia1()==0){ /*60-40 */
                return Deuce  
            }
        }
        
        if (this.Victoriasp1() ){ /*victorias de p1  (4.1)(4.2)*/ 
            return GameP1
        }
        if (this.Victoriasp2()){ /*victorias de p2 */
            return GameP2
        }
    }

    Resultados() {
        let Loveall = "Love-All"; /*(0,0) */
        let L15 = "Love-15"; /*(0,1)*/
        let L30 = "Love-30"; /*(0,2)*/
        let L40 = "Love-40"; /*(0,3)*/
        let GameP1 = "Game Player One"; /*(4,2)(4,1)(4,0)*/
        let GameP2 = "Game Player Two"; /*(2,4)(1,4)(0,4)*/
        let Win1 = "Game Player One Deuce"; /*(5,3)*/
        let ql = "15-Love"; /*(1,0)*/
        let QAll = "15-All"; /*(1-1)*/
        let q30 = "15-30"; /*(1,2)*/
        let q40 = "15-40"; /*(1,3)*/
        let tl = "30-Love"; /*(2,0)*/
        let t15 = "30-15"; /*(2,1)*/
        let Tall = "30-All"; /*(2-2)*/
        let t40 = "30-40"; /*(2,3)*/
        let cl = "40-Love"; /*(3,0)*/
        let c15 = "40-15"; /*(3,1)*/
        let c30 = "40-30"; /*(3,2)*/
        let Deuce = "Deuce"; /*(3-3)*/
        let adv2 = "Adv2"; /*3-4 */
        let Win2 = "Game Player Two Deuce"; /*(3,5)*/
        let adv1 = "Adv1"; /*4-3 */
        return { Loveall, L15, L30, L40, ql, QAll, q30, q40, tl, t15, Tall, t40, cl, c15, c30, Win1, Win2, adv1, adv2, Deuce, GameP1, GameP2 };
    }

    C30() {
        return this.scorePlayerOne == 3 && this.scorePlayerTwo == 2;
    }

    C15() {
        return this.scorePlayerOne == 3 && this.scorePlayerTwo == 1;
    }

    CLove() {
        return this.scorePlayerOne == 3 && this.scorePlayerTwo == 0;
    }

    T40() {
        return this.scorePlayerOne == 2 && this.scorePlayerTwo == 3;
    }

    TAll() {
        return this.scorePlayerOne == 2 && this.scorePlayerTwo == 2;
    }

    T15() {
        return this.scorePlayerOne == 2 && this.scorePlayerTwo == 1;
    }

    TLove() {
        return this.scorePlayerOne == 2 && this.scorePlayerTwo == 0;
    }

    Q40() {
        return this.scorePlayerOne == 1 && this.scorePlayerTwo == 3;
    }

    Q30() {
        return this.scorePlayerOne == 1 && this.scorePlayerTwo == 2;
    }

    QAll() {
        return this.scorePlayerOne == 1 && this.scorePlayerTwo == 1;
    }

    QLove() {
        return this.scorePlayerOne == 1 && this.scorePlayerTwo == 0;
    }

    Love40() {
        return this.scorePlayerOne == 0 && this.scorePlayerTwo == 3;
    }

    Love30() {
        return this.scorePlayerOne == 0 && this.scorePlayerTwo == 2;
    }

    Love15() {
        return this.scorePlayerOne == 0 && this.scorePlayerTwo == 1;
    }

    LoveAll() {
        return this.scorePlayerOne == 0 && this.scorePlayerTwo == 0;
    }

    Deuce() {
        return this.scorePlayerOne >= 3 && this.scorePlayerTwo >= 3;
    }

    Victoriasp1() {
        return this.scorePlayerOne == 4 && this.scorePlayerTwo < 3;
    }

    Victoriasp2() {
        return this.scorePlayerOne < 3 && this.scorePlayerTwo == 4;
    }

    Diferencia2() {
        return this.scorePlayerTwo - this.scorePlayerOne;
    }

    Diferencia1() {
        return this.scorePlayerOne - this.scorePlayerTwo;
    }
}

