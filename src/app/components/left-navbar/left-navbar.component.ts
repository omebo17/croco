import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { SportIconComponent } from '../icons/sport/sport.component';
import { LiveIconComponent } from '../icons/live/live.component';
import { SlotsIconComponent } from '../icons/slots/slots.component';
import { CasinoIconComponent } from '../icons/casino/casino.component';
import { Subject, filter, takeUntil } from 'rxjs';


@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SportIconComponent, LiveIconComponent, SlotsIconComponent, CasinoIconComponent],
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})  

export class LeftNavbarComponent implements OnInit, OnDestroy {

  currentRoute: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(r => r instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
    });
  }

  getFill(route: string): string {
    return this.currentRoute.startsWith(`/${route}`) ? '#fff' : '#6A7787';
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
