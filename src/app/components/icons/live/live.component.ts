import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-live',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live.component.html'
})
export class LiveIconComponent {
  @Input() fill: string = '#6A7787';
}
