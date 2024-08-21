import { Component, OnInit } from '@angular/core';
import { MapService } from './map/map.service';
import { GeolocationService } from './services/geolocation.service';
import { RideRequestService } from './services/ride-request.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UberClone';
  user: any; // Assuming a user object with relevant properties

  constructor(
    private mapService: MapService,
    private geolocationService: GeolocationService,
    private rideRequestService: RideRequestService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.mapService.initMap();
    this.geolocationService.getCurrentLocation().subscribe((location) => {
      this.mapService.updateCurrentLocation(location);
    });
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  // Other methods for handling user interactions, ride requests, etc.
  // ...
}