import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-casino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casino.component.html'
})
export class CasinoIconComponent {
  @Input() fill: string = '#6A7787';
}
