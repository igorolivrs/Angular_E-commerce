import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from './components/template/carousel/carousel.module';

// Components
import { HeaderComponent } from './components/template/header/header.component'
import { FooterComponent } from './components/template/footer/footer.component';
import { CardComponent } from './components/template/card/card.component';
import { MenuCategoriesComponent } from './components/template/menu-categories/menu-categories.component';
import { HomeComponent } from './components/views/home/home.component';
import { MenuRatingComponent } from './components/template/menu-rating/menu-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MenuCategoriesComponent,
    HomeComponent,
    MenuRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
