import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { NavComponent } from "../shared/nav/nav.component";

@NgModule({
    declarations: [HomeComponent, NavComponent, FooterComponent],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
