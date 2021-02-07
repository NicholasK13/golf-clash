import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SliderComponent } from "./slider/slider.component";
import { GolfStartComponent } from "./golf-start/component/golf-start.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, SliderComponent, GolfStartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
