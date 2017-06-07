/**
 * Created by reunion on 06/06/2017.
 */
import {
    Directive, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit,
    OnDestroy
} from "@angular/core";
import {DropzoneDirective} from "./dropzone.directive";
import {DraggableService} from "./draggable.service";
import {TweenLite} from "gsap";

declare var require:any;
const Draggable = require("gsap/Draggable");

@Directive({
    selector: "[draggable]"
})
export class DraggableDirective implements OnChanges, OnInit, OnDestroy {

    draggableInstance:any;

    @Input() draggable:boolean;
    @Input() type:string = "x,y";
    @Input() bounds:any;
    @Input() ghost:boolean = false;
    @Input() enabled:boolean = true;

    @Output() onDragStart:EventEmitter<any> = new EventEmitter();
    @Output() onDrag:EventEmitter<any> = new EventEmitter();
    @Output() onDragEnd:EventEmitter<any> = new EventEmitter();

    //@Output() onHit:EventEmitter<DropzoneDirective> = new EventEmitter();
    //@Output() onGroupHit:EventEmitter<DropzoneDirective> = new EventEmitter();
    
    constructor(
        public element:ElementRef,
        private draggableService:DraggableService
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
                        self.onDragStart.emit(this);
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
                        self.onDrag.emit(this);
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
                        self.onDragEnd.emit(this);
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
    
    ngOnInit() {
        this.draggableService.registerDraggable(this);
    }
    
    ngOnDestroy() {
        this.draggableService.unregisterDraggable(this);
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