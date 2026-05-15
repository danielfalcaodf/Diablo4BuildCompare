// translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TranslationItem } from '../models/interfaces/translation-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('enUS');
  private translations = new Map<string, TranslationItem[]>();

  constructor(private http: HttpClient) { }

  loadTranslations(lang: string) {
    const affixesPath = `assets/i18n/Affixes.${lang}.json`;
    const affixesFullPath = `assets/i18n/Affixes.Full.enUS.json`;
    const aspectsPath = `assets/i18n/Aspects.${lang}.json`;

    return Promise.all([
      this.http.get(affixesPath).toPromise(),
      this.http.get(affixesFullPath).toPromise(),
      this.http.get(aspectsPath).toPromise()
    ]).then(([affixes, affixesFullPath, aspects]) => {
      const dataAffixes = affixes as TranslationItem[]
      dataAffixes.push(...affixesFullPath as TranslationItem[])
      this.translations.set('affixes', affixes as TranslationItem[]);
      this.translations.set('aspects', aspects as TranslationItem[]);
      this.currentLang.next(lang);
      localStorage.setItem('lang', lang);
    });
  }

  getTranslation(type: 'affixes' | 'aspects', id?: number) {
    const translations = this.translations.get(type);
    if (id != null) {
      return translations?.find((item: TranslationItem) => item.IdSno === id);
    }
    return translations
  }

  getCurrentLang() {
    return this.currentLang.asObservable();
  }

  setCurrentLang(lang: string) {
    this.loadTranslations(lang);
  }
}
