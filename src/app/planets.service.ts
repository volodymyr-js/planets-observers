import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlApi } from './config/config';
import { Observable } from 'rxjs';
import { Planet } from './planets-list/planets-list.component';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanetList(): Observable<Planet[]>  {
    return this.http.get<Planet[]>(urlApi);
  }

  getByName(planetsList: Planet[] ,name: string) {
    return planetsList.find(planet => planet.name === name);
  }
}
