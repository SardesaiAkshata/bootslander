import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Ensure that the elements exist before interacting with them
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement;
    const navMenu = document.querySelector('#navmenu') as HTMLElement;

    // Check if elements exist before adding event listener
    if (mobileNavToggle && navMenu) {
      mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
      });
    }
  }
}
