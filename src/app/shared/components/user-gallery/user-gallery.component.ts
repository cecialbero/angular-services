import { Component, OnInit } from '@angular/core';
import { UserImagesService } from '../../services/user-images.service';

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.sass']
})
export class UserGalleryComponent implements OnInit {

  gallery: any;

  constructor(private service: UserImagesService) { }

  ngOnInit() {
    this.service.getImages()
      .subscribe(response => {
        this.gallery = response;
      });
  }

}
