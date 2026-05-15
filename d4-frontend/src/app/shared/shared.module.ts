import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CharacterBuildComponent } from './component/character-build/character-build.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { StatChecklistComponent } from './component/stat-checklist/stat-checklist.component';
import { AttributeDisplayComponent } from './component/attribute-display/attribute-display.component';
import { TranslatePipe } from '../pipes/translate.pipe';
import { BuildSearchComponent } from './component/build-search/build-search.component';
import { TooltipComponent } from './component/tooltip/tooltip.component';

const ModulesImportExportAngular = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

];

const ComponentsDeclarationExport = [
  NavbarComponent,
  CharacterBuildComponent,
  ItemDetailComponent,
  StatChecklistComponent,
  AttributeDisplayComponent,
  BuildSearchComponent,
  TooltipComponent,
  TranslatePipe
];

@NgModule({
  declarations: [...ComponentsDeclarationExport],
  imports: [...ModulesImportExportAngular],
  exports: [
    //** Export Modules */
    ...ModulesImportExportAngular,
    //** Export Componets */
    ...ComponentsDeclarationExport,
  ],
  // entryComponents: [...ComponentsDeclarationExport],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
