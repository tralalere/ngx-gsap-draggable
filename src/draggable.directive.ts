/**
 * Created by reunion on 06/06/2017.
 */
import {Directive, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";
import {TweenLite} from "gsap";

declare var require:any;
const Draggable = require("gsap/Draggable");

@Directive({
    selector: "[draggable]"
})
export class DraggableDirective implements OnChanges {

    draggableInstance:any;

    @Input() draggable:boolean;
    @Input() type:string = "x,y";
    @Input() bounds:any;
    @Input() ghost:boolean = false;
    @Input() enabled:boolean = true;

    @Output() onDragStart:EventEmitter<any> = new EventEmitter();
    @Output() onDrag:EventEmitter<any> = new EventEmitter();
    @Output() onDragEnd:EventEmitter<any> = new EventEmitter();
    
    constructor(
        private element:ElementRef
    ) {
        let self:DraggableDirective = this;
        let ghostNode:any;

        let configuration:Object = {
                type: this.type,
                onDragStart: function () {

                    TweenLite.set(this.target, {
                        clearProps: "all"
                    });

                    if (self.onDragStart) {
                        self.onDragStart.emit(null);
                    }

                    if (self.ghost) {
                        ghostNode = self.element.nativeElement.cloneNode(true);
                        ghostNode.classList.add("ghost");
                        document.body.appendChild(ghostNode);

                        var ideaBounds:any = self.element.nativeElement.getBoundingClientRect();
                        TweenLite.set(ghostNode, {
                            css: {
                                x: ideaBounds.left,
                                y: ideaBounds.top
                            }
                        });
                    }
                },
                onDrag: function () {

                    if (self.onDrag) {
                        self.onDrag.emit(null);
                    }

                    if (self.ghost) {
                        var ideaBounds:any = self.element.nativeElement.getBoundingClientRect();
                        TweenLite.set(ghostNode, {
                            css: {
                                x: ideaBounds.left,
                                y: ideaBounds.top
                            }
                        });
                    }
                },
                onDragEnd: function () {

                    if (self.onDragEnd) {
                        self.onDragEnd.emit(null);
                    }

                    if (self.ghost) {
                        document.body.removeChild(ghostNode);
                        ghostNode = null;
                    }
                }
            };

        if (this.bounds) {
            configuration["bounds"] = this.bounds;
        }

        this.draggableInstance = Draggable.create(this.element.nativeElement, configuration)[0];
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes["draggable"]) {
            if (this.draggable) {
                this.draggableInstance.enable();
            } else {
                this.draggableInstance.disable();
            }
        }
    }
}