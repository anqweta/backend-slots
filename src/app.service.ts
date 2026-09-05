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
    countSame: Map<number, number>,
    SYMBOLS: SymbolItem[],
  ): { moneyWin; currentMult } {
    let maxKey: number | null = null;
    let maxValue: number = 0;
    let currentMult: number = 0;

    for (const [icon, count] of countSame) {
      if (count > maxValue) {
        maxValue = count;
        maxKey = icon;
      }
    }

    console.log('НОМЕР ІКОНКИ ' + maxKey);
    if (countSame.size === 1) {
      currentMult = SYMBOLS[maxKey as number].firstMult;
      console.log('Ви вийграли, ваш множник ПРИ 3 ІКОНКАХ: ' + currentMult);
    } else {
      currentMult = SYMBOLS[maxKey as number].secondMult;
      console.log('Ви вийграли, ваша множник ПРИ 2 ІКОНАХ: ' + currentMult);
    }

    const moneyWin: number = currentBet * currentMult;

    return { moneyWin, currentMult };
  }
}
