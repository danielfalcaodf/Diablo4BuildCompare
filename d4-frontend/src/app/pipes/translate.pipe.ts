// translate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../_services/translation.service';
import { TranslationItem } from '../models/interfaces/translation-item.interface';


@Pipe({
  name: 'translate',
  pure: false  // Marca o pipe como impuro para que ele seja recalculado quando o idioma mudar
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) { }

  transform(id: number, type: 'affixes' | 'aspects', property: keyof TranslationItem): string {
    const translation = this.translationService.getTranslation(type, id) as TranslationItem;
    if (translation && translation[property]) {
      return translation[property].toString();
    }
    return '';
  }
}
