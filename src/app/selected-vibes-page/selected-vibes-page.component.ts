import { Component, OnInit } from '@angular/core';
import { Track } from '../track.model';

@Component({
  selector: 'app-selected-vibes-page',
  templateUrl: './selected-vibes-page.component.html',
  styleUrls: ['./selected-vibes-page.component.css']
})
export class SelectedVibesPageComponent implements OnInit {

  selectedTracks: Track[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
