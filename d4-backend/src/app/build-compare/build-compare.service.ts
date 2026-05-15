import { plainToClass, plainToClassFromExist } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';
import { PlannerDto } from 'src/model/dto/planner.dto';
import { SetDto, SlotItemDto } from 'src/model/dto/set.dto';
import { BuildsManagerMaxrollService } from 'src/services/builds-manager-maxroll/builds-manager-maxroll.service';


@Injectable()
export class BuildCompareService {
  /// Rogue: 4,5,10,11,12,13,14,15,16,17,18
  /// barbarian: 4,5,8,9,11,12,13,14,15,16,17,18
  /// Druid: 4,5,7,13,14,15,16,17,18
  /// Necromancer: 4,5,7,13,14,15,16,17,18
  /// Sorcerer: 4,5,7,13,14,15,16,17,18

  constructor(private readonly buildsManagerMaxrollService: BuildsManagerMaxrollService) {

  }
  async findBuildMaxroll(build: string): Promise<PlannerDto> {
    // Obtenha os dados do planner e converta-os
    const plannerData = await this.buildsManagerMaxrollService.findPlanner(build);
    const data = this.buildsManagerMaxrollService.converterData(plannerData);

    // Crie os conjuntos (sets) a partir dos perfis
    const sets: SetDto[] = data.profiles.map(profile => this.createSetFromProfile(profile, data.items));

    // Converta os dados do planner para PlannerDto
    const planner = plainToClass(PlannerDto, plannerData, { excludeExtraneousValues: true });

    // Adicione os conjuntos (sets) e o nome de usuário ao planner
    planner.sets = sets;
    planner.username = plannerData.user.username;


    return planner;
  }




  findOne(id: number) {
    return `This action returns a #${id} buildCompare`;
  }


  private createSetFromProfile(profile: any, items: any): SetDto {
    const set = plainToClass(SetDto, profile, { excludeExtraneousValues: true });

    // Mapear os itens para os slots correspondentes
    set.slotItens = Object.keys(profile.items).map(slot => ({
      slot: Number(slot),
      item: items[profile.items[slot]],
      itemType: this.buildsManagerMaxrollService.getItemType(Number(slot))
    } as SlotItemDto));

    return set;
  }

}
