import { CommonModule } from '@angular/common'; // always import
import { Component, Input, output, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnclick = new EventEmitter();

  onClick() {
    this.btnclick.emit();
    console.log('works');
  }
}
