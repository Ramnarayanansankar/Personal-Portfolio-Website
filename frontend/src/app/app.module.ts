import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: AboutComponent },
        { path: 'experience', component: ExperienceComponent },
        { path: 'education', component: EducationComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'repositories', component: RepositoriesComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'contact', component: ContactComponent },
        { path: '**', redirectTo: 'about' },
      ],
      { bindToComponentInputs: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

