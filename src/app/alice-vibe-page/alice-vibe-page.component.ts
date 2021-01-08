import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NameService } from '../services/name.service';
import { Track } from '../track.model';

@Component({
  selector: 'app-alice-vibe-page',
  templateUrl: './alice-vibe-page.component.html',
  styleUrls: ['./alice-vibe-page.component.css']
})
export class AliceVibePageComponent {
  faSearch = faSearch; 

  firstname: string | undefined;

  aliceTracks: Track[] = [
    new Track("Ivy", "Frank Ocean", '../../assets/images_alice/ivy.jpg'),
    new Track("I.F.L.Y", "Bazzi", '../../assets/images_alice/IFLY.jpg'),
    new Track("I'm Yours", "Jason Mraz", '../../assets/images_alice/imyours.jpg'),
    new Track("If the World Was Ending", "JP Saxe, Julia Michaels", '../../assets/images_alice/worldwasending.jpg'),
    new Track("Ivy", "Taylor Swift", '../../assets/images_alice/ivy_tay.jpg'),
    new Track("I've Given Up on You", "Real Friends", '../../assets/images_alice/ivegivenuponyou.jpg'),
    new Track("Ivy", "Mabel", '../../assets/images_alice/ivy_mabel.jpg'),

    new Track("Easily", "Bruno Major", '../../assets/images_alice/easily_bruno.jpg'),
    new Track("exile (feat. Bon Iver)", "Taylor Swift, Bon Iver", '../../assets/images_alice/exile.jpg'),
    new Track("Easy", "Mac Ayres", '../../assets/images_alice/easy_mac.jpg'),
    new Track("34+35", "Ariana Grande", '../../assets/images_alice/3435_ariana.jpg'),
    new Track("Eastside (with Halsey & Khalid)", "benny blanco, Halsey, Khalid", '../../assets/images_alice/eastside_benny.jpg'),
    new Track("Easy", "Troye Sivan", '../../assets/images_alice/easy_troye.jpg'),
    new Track("Easier", "5 Seconds of Summer", '../../assets/images_alice/easier_5sos.jpg'),
    new Track("Easily", "Muse", '../../assets/images_alice/easily_muse.jpg'),
    new Track("I Fall In Love Too Easily", "Chet Baker", '../../assets/images_alice/ifallinlovetooeasily.jpg'),
  ];

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getFirstName().subscribe(data => {
      this.firstname = data;
      console.log(this.firstname + " alice");
    });
  }

  onContinue() {
    this.router.navigate(['/bob-vibe']);
  }
}
