import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./flower.component.html`,
  styleUrls: [`./flower.component.css`],
})
export class FlowerComponent implements OnChanges {
  @Input() petalsMode: number = 24;
  @Input() value: number = 0;
  petals: any[] = [];
  fallenPetalsCount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
      this.updateFlower();
  }

  updateFlower(): void {
    this.petals = Array(this.petalsMode).fill(0);
    this.fallenPetalsCount = this.value >= this.petalsMode ? this.petalsMode : this.value;
  }

  getPetalTransform(index: number): string {
    const totalPetals = this.petals.length;
    const angle = (360 / totalPetals) * index;
    return `rotate(${angle}deg)`;
  }
}