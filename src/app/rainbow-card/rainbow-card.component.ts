import { Component, OnChanges, SimpleChanges, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rainbow-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'rainbow-card.component.html',
  styleUrls: ['rainbow-card.component.css']
})
export class RainbowCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() currentTime: string = '23';
  @Input() cardAngle: number = 15; // 360/12 para horas
  cardCount: number = 0;
  cards: number[] = [];
  balatroCards:string[] = [];
  private intervalId: any;
  @Input() isBalatro:boolean = false;

  ngOnInit() {
    this.initializeCards();
    this.intervalId = setInterval(() => this.updateCards(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  initializeCards() {
    const count = this.cardAngle === 15 ? 24 : 60;
    this.cards = Array(count).fill(0);
    for (let i=0; i<59; i++){
      if ( i < 10) this.balatroCards[i] = `assets/Jokers/Joker${Math.floor(Math.random() * 79) + 1}.png`;
      else this.balatroCards[i] = this.balatroCards[Math.floor(Math.random() * 9)];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardAngle']) {
      this.initializeCards();
    }
    this.updateCards();
  }

  updateCards() {
    let calculateCards: number = 0;
    
    if (this.cardAngle === 15) {
      calculateCards = Math.min(parseInt(this.currentTime) % 24, 24);
    } else if (this.cardAngle ===6) {
      calculateCards = Math.min(parseInt(this.currentTime), 60);
    }
    this.cardCount = this.cards.length - calculateCards;
  }

  getCardColor(index: number): string {
    const hue = (index * 360 / this.cards.length) % 360;
    return `hsl(${hue}, 80%, 70%)`;
  }
}

/*
CODIGO EN BATCH PARA CAMBIAR NOMBRE DE LAS CARTAS
@echo off
setlocal enabledelayedexpansion
set /A counter=1
pause
for %%f in ("src\assets\Jokers\*") do (
    echo "!counter!"
    ren "%%f" "Joker!counter!.png"
    set /A counter+=1
)
pause
*/