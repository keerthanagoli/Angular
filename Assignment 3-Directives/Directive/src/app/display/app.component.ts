import { Component } from "@angular/core";
@Component({
selector:'<app-display>',
templateUrl : '/app.component.html',
styleUrls:['./app.component.css']
})
export class DisplayComponent {
displayPara = false;
displayTimeStamp = [];

toggleParagraph() {
    this.displayTimeStamp.push(new Date());
    this.displayPara = true;
}
getColor(time) {
    if(time>=5)
     return "blue";
    else
        return "none"
}
}