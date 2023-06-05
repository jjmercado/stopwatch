import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerDataService 
{
  hours: any = "0" + 0;
  minutes: any = "0" + 0;
  seconds: any = "0" + 0;
  miliseconds: any = "0" + 0;
  interval: number = 0;
  
  constructor() 
  { 
  }
  
  startTimer() 
  {
    this.interval = window.setInterval(() => {
      this.miliseconds++;
      this.miliseconds = this.miliseconds < 10 ? "0" + this.miliseconds : this.miliseconds;

      if(this.miliseconds > 1000)
      {
        this.seconds++;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        this.miliseconds = 0;
      }
      
      if(this.seconds >= 60)
      {
        this.minutes++;
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = 0;
      }

      if(this.minutes >= 60)
      {
        this.hours++;
        this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
        this.minutes = 0;
      }

      if(this.hours >= 24)
      {
        this.hours = 0;
      }
    }      
    , 1);
  }

  stopTimer()
  {
    window.clearInterval(this.interval);
  }

  resetTimer()
  {
    this.hours = "0" + 0;
    this.minutes = "0" + 0;
    this.seconds = "0" + 0;
    this.miliseconds = "0" + 0;

    window.clearInterval(this.interval)
  }
}
