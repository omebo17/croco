import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProviderItem {
  provider: string;
  name: string;
} 

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
  @Input() items: ProviderItem[] = []
  @Input() current?: ProviderItem;
  @Output() currentChange = new EventEmitter<ProviderItem>();
}
