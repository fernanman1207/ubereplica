import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { GeolocationService } from '../services/geolocation.service';
import { RideRequestService } from '../services/ride-request.service';
import { VehicleService } from '../services/vehicle.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  user: any; // Assuming a user object with relevant properties
  currentLocation: any;
  vehicles: any[]; // Array of available vehicle types

  constructor(
    private mapService: MapService,
    private geolocationService: GeolocationService,
    private rideRequestService: RideRequestService,
    private vehicleService: VehicleService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.mapService.initMap();
    this.geolocationService.getCurrentLocation().subscribe((location) => {
      this.currentLocation = location;
      this.mapService.updateCurrentLocation(location);
    });
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
    this.vehicleService.getAvailableVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }

  requestRide(selectedVehicle: any) {
    // Handle vehicle selection and ride request logic
    this.rideRequestService.requestRide(this.currentLocation, selectedVehicle).subscribe(
      (response) => {
        // Handle successful ride request
      },
      (error) => {
        // Handle error during ride request
      }
    );
  }
}