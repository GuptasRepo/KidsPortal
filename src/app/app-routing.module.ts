import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableLevelsComponent } from './table-levels/table-levels.component';
import { AppComponent } from './app.component';
import { PlayTableGameComponent } from './play-table-game/play-table-game.component';
import { LearningModelsComponent } from './learning-models/learning-models.component';

const routes: Routes = [
  {path: 'tables/:level', component: TableLevelsComponent},
  {path:'play/:id', component: PlayTableGameComponent},
  {path: 'learningModels', component: LearningModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
