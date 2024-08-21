// home.component.ts
import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.initMap();
  }
}