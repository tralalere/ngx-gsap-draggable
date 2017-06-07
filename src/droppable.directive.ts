/**
 * Created by Christophe on 07/06/2017.
 */
import {Directive, OnInit, OnDestroy, ElementRef} from "@angular/core";
import {DraggableService} from "./draggable.service";

@Directive({
    selector: "[droppable]"
})
export class DroppableDirective implements OnInit, OnDestroy {
    
    constructor(
        public element:ElementRef,
        private draggableService:DraggableService
    ) {}
    
    ngOnInit() {
        this.draggableService.registerDroppable(this);
    }
    
    ngOnDestroy() {
        this.draggableService.unregisterDroppable(this);
    }
}