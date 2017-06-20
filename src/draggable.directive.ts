/**
 * Created by reunion on 06/06/2017.
 */
import {
    Directive, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit,
    OnDestroy
} from "@angular/core";
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
    @Input() collidable:boolean = false;
    @Input() groups:string|string[];

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
                    
                    // collidable testing
                    for (let collidable of self.draggableService.registeredCollidables) {
                        
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
    
    isInGroup(group:string):boolean {
        if (typeof this.groups === "string") {
            return group === this.groups;
        } else if (this.groups instanceof Array) {
            return (this.groups as string[]).indexOf(group) !== -1;
        }
    }
    
    ngOnInit() {
        this.draggableService.registerDraggable(this);
        
        if (this.collidable) {
            this.draggableService.registerCollidable(this, this.groups);
        }
    }
    
    ngOnDestroy() {
        this.draggableService.unregisterDraggable(this);
        
        if (this.collidable) {
            this.draggableService.unregisterCollidable(this);
        }
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