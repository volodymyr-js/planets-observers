import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Observable } from 'rxjs';

export interface Planet {
  characters: string;
  description: string;
  image: string;
  name: string;
  region: string;
  species: string;
  system: string;
};

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css'],
})
export class PlanetsListComponent implements OnInit {
  planetsList: Observable<Planet[]>;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.planetsList = this.planetsService.getPlanetList();
  }
}
