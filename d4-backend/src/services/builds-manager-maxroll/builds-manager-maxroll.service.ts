import { HttpService } from '@nestjs/axios';
import { plainToClass } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { MaxrollPlannerResponseDto } from './dto/maxroll-planner-response.dto';
import { MaxrollPlannerDataResponseDto } from './dto/maxroll-planner-data-response.dto';
import { ItemDto } from 'src/model/dto/item.dto';
import { ItemType } from 'src/model/enum/item-type.enum';

@Injectable()
export class BuildsManagerMaxrollService {
  constructor(private readonly httpService: HttpService) { }
  async findPlanner(build: string): Promise<MaxrollPlannerResponseDto> {
    const apiMax = `https://planners.maxroll.gg/profiles/d4/${build}`

    const response = await lastValueFrom(this.httpService.get(apiMax));
    const data = plainToClass(MaxrollPlannerResponseDto, response.data);

    return data;
  }

  converterData(maxrollPlannerResponseDto: MaxrollPlannerResponseDto) {

    // console.log(JSON.parse(maxrollPlannerResponseDto.data))

    return plainToClass(MaxrollPlannerDataResponseDto, typeof maxrollPlannerResponseDto.data == 'string' ? JSON.parse(maxrollPlannerResponseDto.data) : maxrollPlannerResponseDto.data);



  }

  getItemType(key: number): ItemType {
    switch (key) {
      case 4:
        return ItemType.Helm;
      case 5:
        return ItemType.Chest;
      case 6:
        return ItemType.Offhand;
      case 7:
      case 8:
      case 9:
      case 11:
      case 12:
        return ItemType.Weapon;
      case 10:
        return ItemType.Ranged;
      case 13:
        return ItemType.Gloves;
      case 14:
        return ItemType.Pants;
      case 15:
        return ItemType.Boots;
      case 16:
      case 17:
        return ItemType.Ring;
      case 18:
        return ItemType.Amulet;
      default:
        throw new Error('Invalid key');
    }
  }
}
