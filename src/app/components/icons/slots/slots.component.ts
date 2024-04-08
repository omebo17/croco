import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-slots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slots.component.html'
})
export class SlotsIconComponent {
  @Input() fill: string = '#6A7787';
}
