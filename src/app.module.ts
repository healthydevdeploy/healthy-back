import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
