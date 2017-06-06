/**
 * Created by reunion on 06/06/2017.
 */
import {Directive, ElementRef, Input, ViewContainerRef, OnInit, Output, EventEmitter} from "@angular/core";

declare var require:any;
const Draggable = require("gsap/Draggable");

@Directive({
    selector: "[draggable]"
})
export class DraggableDirective {

    draggable:any;

    @Input() draggable:string;
    @Output() onDragStart:EventEmitter<any> = new EventEmitter();
    @Output() onDrag:EventEmitter<any> = new EventEmitter();
    @Output() onDragEnd:EventEmitter<any> = new EventEmitter();
    @Input() type:string = "x,y";
    @Input() ghost:boolean = false;
    
    constructor(
        private element:ElementRef,
        private view:ViewContainerRef
    ) {
        let self:DraggableDirective = this;

        this.draggable = Draggable.create(this.element.nativeElement, {
            type: this.type,
            onDragStart: function () {

                if (self.onDragStart) {
                    self.onDragStart.emit(null);
                }

                if (self.ghost) {

                }
            },
            onDrag: function () {

                if (self.onDrag) {
                    self.onDrag.emit(null);
                }

                if (self.ghost) {

                }
            },
            onDragEnd: function (tt) {

                if (self.onDragEnd) {
                    self.onDragEnd.emit(null);
                }

                if (self.ghost) {

                }
            }
        })[0];
    }
}