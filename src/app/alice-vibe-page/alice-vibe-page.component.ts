import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alice-vibe-page',
  templateUrl: './alice-vibe-page.component.html',
  styleUrls: ['./alice-vibe-page.component.css']
})
export class AliceVibePageComponent implements OnInit {
  faSearch = faSearch;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigate(['/bob-vibe']);
  }
}
