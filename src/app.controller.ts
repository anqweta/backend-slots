import { Body, Controller, Post } from '@nestjs/common';
import { SlotMachine } from './app.service';
import type { SymbolItem } from './constants';

interface SlotData {
  currentBet: number;
  countSame: Record<number, number>;
  SYMBOLS: SymbolItem[];
}

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) { }

  constructor(private readonly slotMachine: SlotMachine) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  } */

  @Post('moneywin')
  calcMoneyWin(@Body() slotData: SlotData): number {
    const currentBet = slotData.currentBet;
    const countSame = slotData.countSame;
    const SYMBOLS = slotData.SYMBOLS;

    return this.slotMachine.calcMoneyWin(currentBet, countSame, SYMBOLS);
  }
}
