import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableLevelsComponent } from './table-levels/table-levels.component';
import { PlayTableGameComponent } from './play-table-game/play-table-game.component';
import { LearningModelsComponent } from './learning-models/learning-models.component';

@NgModule({
  declarations: [
    AppComponent,
    TableLevelsComponent,
    PlayTableGameComponent,
    LearningModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
