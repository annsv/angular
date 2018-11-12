import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class UserCardComponent implements OnInit {
  
  @Input() user: User;

  constructor(

  ) { 

  }

  ngOnInit() {


  }

}
