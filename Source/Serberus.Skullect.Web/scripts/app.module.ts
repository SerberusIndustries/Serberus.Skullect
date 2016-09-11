import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SkullectAppComponent }  from "./app";

@NgModule({
    imports: [BrowserModule],
    declarations: [SkullectAppComponent],
    bootstrap: [SkullectAppComponent]
})
export class SkullectAppModule { }