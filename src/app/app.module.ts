import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DependencyComponent } from './components/dependency/dependency.component';
import { FormComponent } from './components/form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDirective } from './components/directives/directive.directive';

const routes: Routes = [
  { 
    path: '', component: TopicListComponent 
  },
  {
    path: 'binding', component: BindingComponent
  },
  {
    path: 'dependency', component: DependencyComponent
  },
  {
    path: 'directives', component: DirectivesComponent
  },
  {
    path: 'form', component: FormComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    BindingComponent,
    DirectivesComponent,
    DependencyComponent,
    FormComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
