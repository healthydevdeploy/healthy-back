import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardRepository } from './card.repository';
import { GetCardsFilterDto } from './dto/get-cards.dto';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card) private cardRepository: CardRepository,
    ) { }
    async getCards(filterDto: GetCardsFilterDto): Promise<Card[]> {
        return this.cardRepository.getCards(filterDto);
    }
}
