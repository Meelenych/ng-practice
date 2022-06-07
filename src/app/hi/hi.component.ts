import { Component, } from '@angular/core';
import { Phrase } from './Phrase'

const PHRASES: Phrase[] = [
  { value: 'Hello', lang: 'English' },
  { value: 'Привіт', lang: 'Ukrainian' },
  { value: 'Hola', lang: 'Spanish' },
  { value: 'Hallo', lang: 'German' },
]

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})

export class HiComponent {

  phrases: Phrase[] = PHRASES;
  selectedLanguage: string = '';

  onSelect(selected: Phrase) {
    this.selectedLanguage = selected.lang;
  }


}
