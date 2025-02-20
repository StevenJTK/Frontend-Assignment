import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() buttonMessage!: string
  @Output() clicked = new EventEmitter<void>();
 
  handledClick() {
    this.clicked.emit();
  }
}


