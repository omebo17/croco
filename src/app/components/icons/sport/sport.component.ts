import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-sport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sport.component.html'
})
export class SportIconComponent {
  @Input() fill: string = '#6A7787';
}
