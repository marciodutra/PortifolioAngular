import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'marciodutra-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Márcio Dutra | Frontend Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'Com 4 anos de experiência desenvolvendo sistemas, interfaces, bots e soluções tecnológicas para fazer da web um lugar melhor. No meu trabalho eu gosto de liderar, propor e executar ideias, escrever e refatorar código limpo, reutilizável e escalonável.'},
    ]);
    
    
    AOS.init(); 

  }
}
