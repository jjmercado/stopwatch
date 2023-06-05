import { Component, OnInit } from '@angular/core';
import { TimerDataService } from '../timer-data.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent
{
  constructor(public timerData: TimerDataService)
  {  }


}
