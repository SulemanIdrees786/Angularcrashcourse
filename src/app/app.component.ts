import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    TasksComponent,
    FontAwesomeModule,
    FormsModule,
    FooterComponent,
    CommonModule,
  ],
})
export class AppComponent {
  faTimes = faTimes;

  constructor(private route: Router) {}

  hasRoute(route: string) {
    return this.route.url === route;
  }
}
