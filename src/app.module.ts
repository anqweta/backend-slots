import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, SlotMachine } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SlotMachine],
})
export class AppModule {}
