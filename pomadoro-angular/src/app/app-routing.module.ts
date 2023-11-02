import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { LayoutComponent } from './base/components/layout/layout.component';

export enum ROUTES {
  welcome = 'welcome',
  tasks = 'tasks',
  settings = 'settings'
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${ROUTES.welcome}`},
  { path: `${ROUTES.welcome}`, component: WelcomeComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: `${ROUTES.tasks}`,
        loadChildren: async () => (await import('./modules/tasks/tasks.module')).TasksModule
      },
      {
        path: `${ROUTES.settings}`,
        loadChildren: async () => (await import('./modules/settings/settings.module')).SettingsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
