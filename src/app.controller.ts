import { Controller, Get } from '@nestjs/common';
import { SlotMachine } from './app.service';
import type { SymbolItem } from './constants';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) { }

  constructor(private readonly slotMachine: SlotMachine) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  } */

  @Get('moneywin')
  calcMoneyWin(
    currentBet: number,
    countSame: Map<number, number>,
    SYMBOLS: SymbolItem[],
  ): { moneyWin; currentMult } {
    return this.slotMachine.calcMoneyWin(currentBet, countSame, SYMBOLS);
  }
}
