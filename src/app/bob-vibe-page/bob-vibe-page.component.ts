import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router' //ii
import { NameService } from '../services/name.service';
import { Track } from '../track.model';

@Component({
  selector: 'app-bob-vibe-page',
  templateUrl: './bob-vibe-page.component.html',
  styleUrls: ['./bob-vibe-page.component.css']
})
export class BobVibePageComponent implements OnInit {
  faSearch = faSearch;

  secondname: string | undefined;

  bobTracks: Track[] = [
      new Track("Numb", "Linkin Park", '../../assets/images_bob/numb.jpg'),
      new Track("New Light", "John Mayer", '../../assets/images_bob/ivy.jpg'),
      new Track("Night Changes", "One Direction", '../../assets/images_bob/ivy.jpg'),
      new Track("Nothing's the Same", "Alexander 23, Jeremy Zucker", '../../assets/images_bob/ivy.jpg'),
      new Track("Never Not", "Lauv", '../../assets/images_bob/ivy.jpg'),
      new Track("Nuvole Bianche ", "Ludovico Einaudi", '../../assets/images_bob/ivy.jpg'),
      new Track("NUMB", "XXXTENTACION", '../../assets/images_bob/ivy.jpg'),
      new Track("NUNU NANA", "Jessi", '../../assets/images_bob/ivy.jpg'),
      new Track("Numb / Encore", "JAY-Z, Linkin Park", '../../assets/images_bob/ivy.jpg'),

      new Track("Teenagers", "My Chemical Romance", '../../assets/images_bob/teenagers.jpg'),
      new Track("The Scientist", "Coldplay", '../../assets/images_bob/thescientist.jpg'),
      new Track("Take Me To Church", "Hozier", '../../assets/images_bob/taketomechurch.jpg'),
      new Track("Train Wreck", "James Arthur", '../../assets/images_bob/trainwreck.jpg'),
      new Track("thank u, next", "Ariance Grande", '../../assets/images_bob/thanku.jpg'),
      new Track("Tenerife Sea", "Ed Sheeran", '../../assets/images_bob/tenerife.jpg'),
      new Track("TEST DRIVE", "Joji", '../../assets/images_bob/TESTDRIVE.jpg'),
      new Track("Teenage Dream", "Katy Perry", '../../assets/images_bob/teenagedream.jpg'),
      new Track("Teeth", "5 Seconds of Summer", '../../assets/images_bob/teeth_5sos.jpg'),
      new Track("Smells Like Teen Spirit", "Nirvana", '../../assets/images_bob/teenagedream.jpg'),
      new Track("Teenage Dirtbag", "Wheatus", '../../assets/images_bob/teenagedirftbag.jpg')
  ];

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getSecondName().subscribe(data => {
      this.secondname = data;
      console.log(this.secondname + " bob");
    });
  }

  ngOnInit(): void {
  }

  onContinue() {}
}
