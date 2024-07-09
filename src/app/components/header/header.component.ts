import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ButtonComponent, CommonModule],
})
export class HeaderComponent {
  title = 'angular-crash';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiservice: UiService, private route: Router) {
    this.subscription = this.uiservice
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiservice.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.route.url === route;
  }
}
