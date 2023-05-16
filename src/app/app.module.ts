import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExeperienceComponent } from './exeperience/exeperience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnteteComponent } from './entete/entete.component';
import { FooterComponent } from './footer/footer.component';
import { ToogleBarMenuComponent } from './toogle-bar-menu/toogle-bar-menu.component';
import { TechnosComponent } from './technos/technos.component';
import { TableauCompetenceComponent } from './tableau-competence/tableau-competence.component';
import { HomeComponent } from './home/home.component';
import { CompetenceJavaComponent } from './competence-java/competence-java.component';
import { CompetencePHPComponent } from './competence-php/competence-php.component';
import { CompetenceSymfonyComponent } from './competence-symfony/competence-symfony.component';
import { CompetenceJavaEEComponent } from './competence-java-ee/competence-java-ee.component';
import { CompetencePythonComponent } from './competence-python/competence-python.component';
import { CompetenceAngularComponent } from './competence-angular/competence-angular.component';
import { CompetenceApiComponent } from './competence-api/competence-api.component';
import { CompetenceGestionDataComponent } from './competence-gestion-data/competence-gestion-data.component';
import { TechosuiteComponent } from './techosuite/techosuite.component';
import { TechojavaComponent } from './techojava/techojava.component';
import { TechophpComponent } from './techophp/techophp.component';
import { TechojavaeeComponent } from './techojavaee/techojavaee.component';
import { TechoangularComponent } from './techoangular/techoangular.component';
import { TechopythonComponent } from './techopython/techopython.component';
import { TechosymfonyComponent } from './techosymfony/techosymfony.component';
import { BigBlueComponent } from './big-blue/big-blue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ExperienceprojetComponent } from './experienceprojet/experienceprojet.component';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
    ExeperienceComponent,
    ContactsComponent,
    EnteteComponent,
    FooterComponent,
    ToogleBarMenuComponent,
    TechnosComponent,
    TableauCompetenceComponent,
    CompetenceJavaComponent,
    CompetencePHPComponent,
    CompetenceSymfonyComponent,
    CompetenceJavaEEComponent,
    CompetencePythonComponent,
    CompetenceAngularComponent,
    CompetenceApiComponent,
    CompetenceGestionDataComponent,
    TechosuiteComponent,
    TechojavaComponent,
    TechophpComponent,
    TechojavaeeComponent,
    TechoangularComponent,
    TechopythonComponent,
    TechosymfonyComponent,
    BigBlueComponent,
    HomeComponent,
    AccueilComponent,
    ExperienceprojetComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     { path: '', component: AccueilComponent },
     { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactsComponent },
      { path: 'java', component: CompetenceJavaComponent },
      { path: 'javaee', component: CompetenceJavaEEComponent },
      { path: 'python', component: CompetencePythonComponent },
      { path: 'php', component: CompetencePHPComponent },
       { path: 'angular', component: CompetenceAngularComponent },
      { path: 'symfony', component: CompetenceSymfonyComponent },
      { path: 'tjava', component: TechojavaComponent },
      { path: 'bigblue', component: BigBlueComponent },
      { path: 'projets', component: ProjectsComponent },
       { path: 'technos', component: TechnosComponent },
       { path: 'experience', component: ExperienceprojetComponent },

     { path: 'competences',component: TableauCompetenceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
