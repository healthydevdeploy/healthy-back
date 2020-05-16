import { Controller, Get, UsePipes, ValidationPipe, Query, Post, Body, UseInterceptors } from '@nestjs/common';
import { GetCardsFilterDto } from './dto/get-cards.dto';
import { Card } from './card.entity';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller()
export class CardsController {
    constructor(private cardsService: CardsService) { }
    @Get('v1/cards')
    @UsePipes(new ValidationPipe({ transform: true }))
    getCards(@Query() filterDto: GetCardsFilterDto): Promise<Card[]> {
        return this.cardsService.getCards(filterDto);
    }

    @Post('v1/cards')
    @UsePipes(ValidationPipe)
    createCards(@Body() createCardsDto: CreateCardDto): Promise<Card> {
        return this.cardsService.createCards(createCardsDto);
    }
}
