import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { areTheyAvengers, getCharacters } from '../heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { areTheyEvil } from '../heroes/heroes.component';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})


export class AboutComponent implements OnInit {
  characters: Character[] = [];
  evilCharacters: Character[] = [];
  avengerCharacters: Character[] = [];

  ngOnInit(): void {
    this.characters = getCharacters();
    this.evilCharacters = areTheyEvil(true, this.characters);
    this.avengerCharacters = areTheyAvengers(true, this.characters);
  }
}
