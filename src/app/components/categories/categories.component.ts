import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CategoryItem {
  category: string;
  name: string;
  img: string;
  size?: number;
} 

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() items: CategoryItem[] = []
  @Input() current?: CategoryItem;
  @Output() currentChange = new EventEmitter<CategoryItem>();
  
}
