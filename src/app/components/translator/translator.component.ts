import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/models/button';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  text: string = '';
  target: string = '';
  source: string = '';
  translatedText: string = '';
  buttonsTargetLanguage!: Array<Button>;
  buttonsSourceLanguage!: Array<Button>;

  constructor(private translatorService: TranslatorService) { 
    this.target = 'es';
    this.source = 'en';
    this.buttonsTargetLanguage = Array<Button>();
    this.buttonsTargetLanguage = [
      { selected: false, language: 'Italiano', abreviation: 'it', image: 'italia.png'},
      { selected: false, language: 'Fraces', abreviation: 'fr', image: 'france.png'},
      { selected: false, language: 'Ingles', abreviation: 'en',image: 'united-kingdom.png'},
      { selected: false, language: 'Español', abreviation: 'es',image: 'spain.png'}
    ];
    this.buttonsSourceLanguage = Array<Button>();
    this.buttonsSourceLanguage = [
      { selected: false, language: 'Italiano', abreviation: 'it', image: 'italia.png'},
      { selected: false, language: 'Fraces', abreviation: 'fr', image: 'france.png'},
      { selected: false, language: 'Ingles', abreviation: 'en',image: 'united-kingdom.png'},
      { selected: false, language: 'Español', abreviation: 'es',image: 'spain.png'}
    ];
  }

  ngOnInit(): void {
  }

  translateText(){
    // console.log(this.text);
    // console.log(`De ${this.source} a ${this.target}`);
    this.translatorService.translate(this.text, this.target, this.source).subscribe(
      result => {
      this.translatedText = result.data.translations[0].translatedText;
    })
  }

  selectTargetLanguage(button: Button){
    this.buttonsTargetLanguage.forEach(b => {
      b.selected = false;
    });
    button.selected = !button.selected;
    this.target = button.abreviation;
  }

  selectSourceLanguage(button: Button){
    this.buttonsSourceLanguage.forEach(b => {
      b.selected = false;
    });
    button.selected = !button.selected;
    this.source = button.abreviation;
  }
}
