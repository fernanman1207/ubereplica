import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { google } from 'google-maps';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: google.maps.Map;

  initMap() {
    // Inicializar el mapa con la ubicación del usuario
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  // Otros métodos para agregar marcadores, calcular rutas, etc.
}