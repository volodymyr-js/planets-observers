import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Planet } from '../planets-list/planets-list.component';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  planetDescription: Planet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const planetName = this.route.snapshot.params.name;

    this.planetsService
      .getPlanetList()
      .pipe(takeUntil(this.destroy))
      .subscribe((planetList) => {
        this.planetDescription = this.planetsService.getByName(planetList, planetName);
      });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
