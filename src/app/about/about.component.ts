import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../models/character';
import { getCharacters } from '../heroes/heroes.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  characters: Character[] = [];

  ngOnInit(): void {
    this.characters = getCharacters();
  }
}


