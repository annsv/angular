import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircusPipe } from './pipes/circus/circus.pipe';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UserCardComponent } from './component/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HighlightDirective,
    CircusPipe,
    UserCardComponent
  ],
  exports: [   
    HighlightDirective,
    CircusPipe,
    UserCardComponent

  ]
})
export class SharedModule { }