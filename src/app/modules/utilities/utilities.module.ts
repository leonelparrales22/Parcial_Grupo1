import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, FooterComponent],
  exports: [BannerComponent, FooterComponent],
})
export class UtilitiesModule {}
