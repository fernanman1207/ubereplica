import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { MapService } from 'map/map.service.ts'; // Mock or replace with real service
import { GeolocationService } from '../services/geolocation.service'; // Mock or replace
import { RideRequestService } from '../services/ride-request.service'; // Mock or replace
import { VehicleService } from '../services/vehicle.service'; // Mock or replace
import { UserService } from '../services/user.service'; // Mock or replace

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [
        { provide: MapService, useValue: new MapService() }, // Mock or replace
        { provide: GeolocationService, useValue: new GeolocationService() }, // Mock or replace
        { provide: RideRequestService, useValue: new RideRequestService() }, // Mock or replace
        { provide: VehicleService, useValue: new VehicleService() }, // Mock or replace
        { provide: UserService, useValue: new UserService() } // Mock or replace
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more unit tests for specific functionalities
});