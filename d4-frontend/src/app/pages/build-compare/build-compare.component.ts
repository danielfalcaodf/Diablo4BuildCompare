import { Component } from '@angular/core';
import { GearDto } from 'src/app/models/dtos/gear.dto';
import { Explicit, Implicit } from '../../models/dtos/item.dto';

@Component({
  selector: 'app-build-compare',

  templateUrl: './build-compare.component.html',
  styleUrl: './build-compare.component.scss'
})
export class BuildCompareComponent {

  gearsA: GearDto[];
  gearsB: GearDto[];
  setBuild(event: any) {

    if (event.buildType == 'A') {
      this.gearsA = event.gears;
    }
    else {
      this.gearsB = event.gears;
    }
    this.buildCompare()
  }
  buildCompare() {
    if (!this.gearsA || !this.gearsB) {
      return
    }
    const buildA = this.gearsA
    const buildB = this.gearsB
    // this.gearsA.forEach(gearA => {
    //   const gearB = this.gearsB.find(gb => gb.slot === gearA.slot);

    //   if (gearB) {
    //     this.compareItemAfixos(gearA.item.explicits, gearB.item.explicits);
    //     this.compareItemImplicit(gearA.item.implicits, gearB.item.implicits);
    //     this.compareItemTemp(gearA.item.tempered, gearB.item.tempered);

    //   }
    // });


    const afixosCountA = this.countAfixos(buildA);
    const afixosCountB = this.countAfixos(buildB);

    buildA.forEach(gearA => {
      const itemA = gearA.item;

      itemA.explicits.forEach(afixoA => {
        const countInB = afixosCountB.get(afixoA.nid) || 0;
        const countInA = afixosCountA.get(afixoA.nid) || 0;

        if (countInA > countInB) {
          // Se a quantidade de afixos A é maior que em B, marcar o excesso como incorreto
          const excess = countInA - countInB;
          afixoA.correct = excess === 0;
          afixoA.correct = countInB > 0; // Correto se afixo existe na build B
        } else {
          // Marcar como correto se o afixo estiver na build B
          afixoA.correct = countInB > 0;
        }
      });
    });
  }
  compareItemAfixos(afixosA: Explicit[], afixosB: Explicit[]): void {
    const afixosMap = new Map<number, number>();
    if (!afixosA || !afixosB) {
      return
    }
    // Contar os afixos na build B
    afixosB.forEach(afixo => {
      if (afixosMap.has(afixo.nid)) {
        afixosMap.set(afixo.nid, afixosMap.get(afixo.nid)! + 1);
      } else {
        afixosMap.set(afixo.nid, 1);
      }
    });

    // Comparar e marcar os afixos da build A
    afixosA.forEach(afixo => {
      if (afixosMap.has(afixo.nid) && afixosMap.get(afixo.nid)! > 0) {
        afixo.correct = true;
        afixosMap.set(afixo.nid, afixosMap.get(afixo.nid)! - 1);
      } else {
        afixo.correct = false;
      }
    });
  }
  compareItemImplicit(implicitsA: Implicit[], implicitsB: Implicit[]): void {
    const implicitMap = new Map<number, number>();
    if (!implicitsA || !implicitsB) {
      return
    }
    // Contar os Implicit na build B
    implicitsB.forEach(implicit => {
      if (implicitMap.has(implicit.nid)) {
        implicitMap.set(implicit.nid, implicitMap.get(implicit.nid)! + 1);
      } else {
        implicitMap.set(implicit.nid, 1);
      }
    });

    // Comparar e marcar os Implicit da build A
    implicitsA.forEach(implicit => {
      if (implicitMap.has(implicit.nid) && implicitMap.get(implicit.nid)! > 0) {
        implicit.correct = true;
        implicitMap.set(implicit.nid, implicitMap.get(implicit.nid)! - 1);
      } else {
        implicit.correct = false;
      }
    });
  }
  compareItemTemp(tempA: Explicit[], tempB: Explicit[]): void {
    const tempMap = new Map<number, number>();
    if (!tempA || !tempB) {
      return
    }
    // Contar os afixos na build B
    tempB.forEach(temp => {
      if (tempMap.has(temp.nid)) {
        tempMap.set(temp.nid, tempMap.get(temp.nid)! + 1);
      } else {
        tempMap.set(temp.nid, 1);
      }
    });

    // Comparar e marcar os temps da build A
    tempA.forEach(temp => {
      if (tempMap.has(temp.nid) && tempMap.get(temp.nid)! > 0) {
        temp.correct = true;
        tempMap.set(temp.nid, tempMap.get(temp.nid)! - 1);
      } else {
        temp.correct = false;
      }
    });
  }

  countAfixos(build: GearDto[]): Map<number, number> {
    const afixosCount = new Map<number, number>();

    build.forEach(gear => {
      gear.item.explicits?.forEach(afixo => {
        afixosCount.set(afixo.nid, (afixosCount.get(afixo.nid) || 0) + 1);
      });
    });

    return afixosCount;
  }

}
