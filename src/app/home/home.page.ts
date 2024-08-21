import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { RideRequestService } from './services/ride-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private mapService: MapService,
    private rideRequestService: RideRequestService
  ) {}

  ngOnInit() {
    this.mapService.initMap();
  }

  requestRide() {
    // Lógica para solicitar un viaje
    this.rideRequestService.requestRide().subscribe(
      (response) => {
        // Manejar la respuesta exitosa
      },
      (error) => {
        // Manejar el error
      }
    );
  }
}