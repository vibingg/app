import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bob-vibe-page',
  templateUrl: './bob-vibe-page.component.html',
  styleUrls: ['./bob-vibe-page.component.css']
})
export class BobVibePageComponent implements OnInit {
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  onContinue() {}
}
