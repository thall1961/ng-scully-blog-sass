import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavComponent } from "./shared/nav/nav.component";
import { FooterComponent } from "./shared/footer/footer.component";

@NgModule({
    declarations: [AppComponent, NavComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, ScullyLibModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
