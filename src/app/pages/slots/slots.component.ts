import { Component, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/components/categories/categories.component';
import { ProviderItem } from 'src/app/components/providers/providers.component';
import { GameModel, GetSlotCategoriesModel } from 'src/app/models/slot.model';
import { SlotService } from 'src/app/services/slot.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  categoryMenuItems: CategoryItem[]=[
    {category: 'web:popular', name: 'Top Slots', img: 'assets/top-slots.svg'},
    {category: 'Web|Mob:search', name: 'Favorites', img: 'assets/favorites.svg'},
    {category: 'web:new_games', name: 'New Games', img: 'assets/new-games.svg'},
    {category: 'web:buy_bonus', name: 'Buy Bonus', img: 'assets/buy-bonus.svg'},
    {category: 'Mobile : Jackpot', name: 'History', img: 'assets/history.svg'}
  ];

  providerItems: ProviderItem[]=[];

  fetchedCategories?: GetSlotCategoriesModel;
  currentCategoryItem?: CategoryItem;
  currentProviderItem?: ProviderItem;
  slots: GameModel[] = [];


  constructor(private slotService: SlotService) { }

  ngOnInit(): void {
    this.slotService.getSlotCategories().subscribe(categoriesResponse => {
      this.fetchedCategories = categoriesResponse;
      this.categoryMenuItems = this.categoryMenuItems.map(item => ({
        ...item,
        size: this.fetchedCategories?.data.find(r => r.category === item.category)?.games.length
      }));

      this.onCurrentCategoryChange(this.categoryMenuItems[0])
    })

    this.slotService.getProviders().subscribe(providersResponse => {
      this.providerItems = [
        ...this.providerItems,
        ...providersResponse.data.slice(0, 10)
      ];
      console.log(this.providerItems)
    });
  }

  onCurrentCategoryChange(event: CategoryItem): void {
    this.currentCategoryItem = event;
    this.currentProviderItem = undefined;

    this.slots = this.fetchedCategories?.data.find(r => r.category === this.currentCategoryItem?.category)?.games || [];
  }

  onCurrentProviderChange(event: ProviderItem): void {
    this.currentCategoryItem = undefined;
    this.currentProviderItem = event;

    this.slotService.getSlotsByProviders(this.currentProviderItem.provider).subscribe(response => {
      this.slots = response.data.games;
    });
  }
}
