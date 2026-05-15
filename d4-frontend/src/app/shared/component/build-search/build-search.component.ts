import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SetDto } from 'src/app/models/dtos/set.dto';

@Component({
  selector: 'app-build-search',
  templateUrl: './build-search.component.html',
  styleUrls: ['./build-search.component.scss']
})
export class BuildSearchComponent {

  searchInput: string = '';
  buildLink: string | null = null;
  set: SetDto;
  @Input() sets: SetDto[];
  @Output() onSearchBuild = new EventEmitter()
  @Output() onSelectSet = new EventEmitter()
  searchBuild() {
    const baseURL = 'https://maxroll.gg/d4/planner/';
    // Remove o trecho após "#" se for um link
    const buildId = this.searchInput.split('#')[0].split('/').pop();
    if (buildId) {
      this.buildLink = `${baseURL}${buildId}`;
      this.onSearchBuild.emit(buildId);
    }
  }

  selectSet() {

    this.onSelectSet.emit(this.set);
  }
}
