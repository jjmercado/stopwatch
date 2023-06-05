import { TimerDataService } from './../timer-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  startButton = "Start";
  stopButton = "Stop";
  resetButton = "Reset";

  constructor(public timerData: TimerDataService)
  { }
}
