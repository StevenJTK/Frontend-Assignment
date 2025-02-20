import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [
    CommonModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  characters: Character[] = [];

  constructor() { }

  ngOnInit(): void {
    this.characters = getCharacters();
  }
}

const MoonKnight: Character = {
  name: "Marc Spector",
  title: "Moon Knight",
  power: "Blessed by Khonsu",
  age: 37,
  isEvil: false,
  isAvenger: false
}

const Storm: Character = {
  name: "Ororo Munroe",
  title: "Storm",
  power: "Weather Control",
  age: 32,
  isEvil: false,
  isAvenger: true
}

const Loki: Character = {
  name: "Loki Laufeyson",
  title: "Loki",
  power: "Trickster God",
  age: 1050,
  isEvil: true,
  isAvenger: false
}


export function getCharacters(): Character[] {
  return [MoonKnight, Storm, Loki]
}