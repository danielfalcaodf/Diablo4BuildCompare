import { Component, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from 'src/app/_services/translation.service';
import { GearDto } from 'src/app/models/dtos/gear.dto';
import { TranslationItem } from 'src/app/models/interfaces/translation-item.interface';

@Component({
  selector: 'app-item-detail',

  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent implements OnInit {
  @Input() gear: GearDto = {} as GearDto
  translationsAffixes: TranslationItem[]

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.getCurrentLang().subscribe(lang => {
      this.translationsAffixes = this.translationService.getTranslation('affixes') as TranslationItem[];
    });
  }
}
