import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { google } from 'google-maps';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: google.maps.Map;
  directionsService = new google.maps.DirectionsService();

  initMap(center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 }) {
    // Inicializar el mapa con la ubicación del usuario o una ubicación por defecto
    this.map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 8,
    });
  }

  calculateRoute(origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral): Observable<google.maps.DirectionsResult | string> {
    return new Observable((observer) => {
      this.directionsService.route({
        origin,
        destination,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          observer.next(response);
        } else {
          observer.error(`Error calculating route: ${status}`);
        }
      });
    });
  }

  // Otros métodos útiles:
  addMarker(position: google.maps.LatLngLiteral): google.maps.Marker {
    return new google.maps.Marker({
      position,
      map: this.map
    });
  }

  fitBounds(bounds: google.maps.LatLngBounds): void {
    this.map.fitBounds(bounds);
  }
}