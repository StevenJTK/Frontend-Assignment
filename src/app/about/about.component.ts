import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { getCharacters } from '../heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ButtonComponent } from '../button/button.component';
import { BrowserModule } from '@angular/platform-browser';


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
