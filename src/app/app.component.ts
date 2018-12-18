import { AfterViewInit, Component } from '@angular/core';
import { NgPerfume, PerfumeAfterViewInit } from 'perfume.js/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@PerfumeAfterViewInit('AppComponent')
export class AppComponent implements AfterViewInit {
  title = 'ngx-demo';

  constructor(public perfume: NgPerfume) { }

  ngAfterViewInit() { }
  launchFalconNine() {
    this.perfume.start('rocketScience');
    // Rocket Science Match ...
    this.perfume.end('rocketScience');
  }
}
