import { Injectable } from '@nestjs/common';
import { SymbolItem } from './constants';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class SlotMachine {
  calcMoneyWin(
    currentBet: number,
    countSame: Record<number, number>,
    SYMBOLS: SymbolItem[],
  ): number {
    let maxKey: number = -1;
    let maxValue: number = 0;
    let currentMult: number = 0;

    for (const [icon, count] of Object.entries(countSame)) {
      if (count > maxValue) {
        maxValue = count;
        maxKey = Number(icon);
      }
    }

    console.log('НОМЕР ІКОНКИ ' + maxKey);
    if (Object.keys(countSame).length === 1) {
      currentMult = SYMBOLS[maxKey].firstMult;
      console.log('Ви вийграли, ваш множник ПРИ 3 ІКОНКАХ: ' + currentMult);
    } else {
      currentMult = SYMBOLS[maxKey].secondMult;
      console.log('Ви вийграли, ваша множник ПРИ 2 ІКОНАХ: ' + currentMult);
    }

    const moneyWin: number = currentBet * currentMult;

    return moneyWin;
  }
}
