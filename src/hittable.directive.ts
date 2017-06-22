/**
 * Created by Christophe on 22/06/2017.
 */
import {Directive, OnInit, ElementRef, Input, OnDestroy} from "@angular/core";
import {DraggableService} from "./draggable.service";

@Directive({
    selector: "[hittable]"
})
export class HittableDirective implements OnInit, OnDestroy {
    
    @Input() hittable:boolean = true;
    @Input() groups:string|string[];

    constructor(
        public element:ElementRef,
        private draggableService:DraggableService
    ) {}

    ngOnInit() {
        if (this.hittable) {
            this.draggableService.registerCollidable(this, this.groups);
        }
    }

    ngOnDestroy() {
        if (this.hittable) {
            this.draggableService.unregisterCollidable(this);
        }
    }
}