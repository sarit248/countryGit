import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    @Input()
    public source: string; 

    @Input("side")
    public length: number; 

    @Output()
    public myClick: EventEmitter<string> = new EventEmitter();


    public clickOnImage(): void {
        // Raising an event which gets the image source:
        this.myClick.emit(this.source);
    }
}
