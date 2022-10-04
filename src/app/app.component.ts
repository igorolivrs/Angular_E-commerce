import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_marketplace';

  images = [
    { imageSrc: '../assets/carousel-images/ryzen7000.jpg', imageAlt: 'AMD Ryzen series 7000' },
    { imageSrc: '../assets/carousel-images/tp-link_tapo_d.jpg', imageAlt: 'Tp-Link Tapo' },
    { imageSrc: '../assets/carousel-images/formuler_tv_d.jpg', imageAlt: 'IPTV Formuler' },
    { imageSrc: '../assets/carousel-images/artics.jpg', imageAlt: 'SteelSeries Artics' },
  ];
}
