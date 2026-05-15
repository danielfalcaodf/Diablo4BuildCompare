import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { GearDto } from 'src/app/models/dtos/gear.dto';
import { ItemDto } from 'src/app/models/dtos/item.dto';
import { PlannerDto } from 'src/app/models/dtos/planner.dto';
import { SetDto } from 'src/app/models/dtos/set.dto';
import { ItemType } from 'src/app/models/enum/item-type.enum';
import { BuildCompareService } from 'src/app/services/build-compare.service';

@Component({
  selector: 'app-character-build',

  templateUrl: './character-build.component.html',
  styleUrl: './character-build.component.scss'
})
export class CharacterBuildComponent {

  gearSlotsLeft = ['Helm', 'Chest Armor', 'Gloves', 'Pants', 'Boots', 'Ranged Weapon', ''];
  gearSlotsRight = ['Amulet', 'Ring 1', 'Ring 2', 'Dual-Wield Weapon 1', 'Dual-Wield Weapon 2', '', ''];
  gemSlots = ['Weapon', 'Armor', 'Amulet', 'Ring 1', 'Ring 2'];

  tabs = [
    { label: 'Gear' },
    { label: 'Stats' },
    { label: 'Attribute' },

  ];

  @Input() buildType: 'A' | 'B' = 'A'
  gears: GearDto[] = [
    {
      id: 'helm',
      name: 'Helm',
      icon: 'assets/images/helm.png',
      item: {} as ItemDto,
      slot: 4,
      type: ItemType.Helm,
      active: false

    },
    {
      id: 'chest_armor',
      name: 'Chest Armor',
      icon: 'assets/images/chest_armor.png',
      item: {} as ItemDto,
      slot: 5,
      type: ItemType.Chest,
      active: false

    },
    {
      id: 'gloves',
      name: 'Gloves',
      icon: 'assets/images/gloves.png',
      item: {} as ItemDto,
      slot: 13,
      type: ItemType.Gloves,
      active: false

    },
    {
      id: 'pants',
      name: 'Pants',
      icon: 'assets/images/pants.png',
      item: {} as ItemDto,
      slot: 14,
      type: ItemType.Pants,
      active: false

    },
    {
      id: 'boots',
      name: 'Boots',
      icon: 'assets/images/boots.png',
      item: {} as ItemDto,
      slot: 15,
      type: ItemType.Boots,
      active: false

    },
    {
      id: 'ranged_weapon',
      name: 'Ranged Weapon',
      icon: 'assets/images/ranged_weapon.png',
      item: {} as ItemDto,
      slot: 10,
      type: ItemType.Ranged,
      active: false

    },
    {
      id: 'amulet',
      name: 'Amulet',
      icon: 'assets/images/amulet.png',
      item: {} as ItemDto,
      slot: 18,
      type: ItemType.Amulet,
      active: false
    },
    {
      id: 'ring_1',
      name: 'Ring 1',
      icon: 'assets/images/ring_1.png',
      item: {} as ItemDto,
      slot: 16,
      type: ItemType.Ring,
      active: false

    },
    {
      id: 'ring_2',
      name: 'Ring 2',
      icon: 'assets/images/ring_2.png',
      item: {} as ItemDto,
      slot: 17,
      type: ItemType.Ring,
      active: false

    },

    {
      id: 'weapon',
      name: 'Weapon',
      icon: 'assets/images/weapon.png',
      item: {} as ItemDto,
      slot: 7,
      type: ItemType.Weapon,
      active: false

    },
    {
      id: 'bludgeoning_weapon',
      name: 'Bludgeoning Weapon',
      icon: 'assets/images/bludgeoning_weapon.png',
      item: {} as ItemDto,
      slot: 8,
      type: ItemType.Weapon,
      active: false

    },
    {
      id: 'slashing_weapon',
      name: 'Slashing Weapon',
      icon: 'assets/images/slashing_weapon.png',
      item: {} as ItemDto,
      slot: 9,
      type: ItemType.Weapon,
      active: false

    },
    {
      id: 'dual_wield_weapon_1',
      name: 'Dual-Wield Weapon 1',
      icon: 'assets/images/dual-wield_weapon_1.png',
      item: {} as ItemDto,
      slot: 11,
      type: ItemType.Weapon,
      active: false

    },
    {
      id: 'dual_wield_weapon_2',
      name: 'Dual-Wield Weapon 2',
      icon: 'assets/images/dual-wield_weapon_2.png',
      item: {} as ItemDto,
      slot: 12,
      type: ItemType.Weapon,
      active: false

    },

  ]
  selectedIndex = 0;

  planner: PlannerDto = {} as PlannerDto;
  @Output() onSetBuild = new EventEmitter();
  /**
   *
   */
  constructor(private readonly buildCompareService: BuildCompareService) {


  }


  selectTab(index: number) {
    this.selectedIndex = index;
  }

  async searchBuild(buildId: string) {
    this.buildCompareService.buildCompareMaxroll(buildId).subscribe(res => {
      if (res) {
        this.planner = res;
      }
    })
  }

  selectSet(set: SetDto) {
    if (!set) {
      return
    }
    set.slotItens.forEach(st => {
      const gear = this.gears.find(g => g.slot == st.slot);
      if (gear) {
        gear.item = st.item
        gear.active = true;
      }
    })
    this.onSetBuild.emit({ gears: this.gears, buildType: this.buildType });

  }

}
