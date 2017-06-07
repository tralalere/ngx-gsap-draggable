/**
 * Created by Christophe on 07/06/2017.
 */
import {Directive, OnInit, OnDestroy, ElementRef, Input, Output, EventEmitter} from "@angular/core";
import {DraggableService} from "./draggable.service";
import {DropzoneDirective} from "./dropzone.directive";

@Directive({
    selector: "[droppable]"
})
export class DroppableDirective implements OnInit, OnDestroy {

    @Input() droppable:boolean = true;
    @Input() groups:string|string[];
    
    @Output() onDropped:EventEmitter<DropzoneDirective> = new EventEmitter();
    @Output() onHit:EventEmitter<DropzoneDirective> = new EventEmitter();
    @Output() onGroupHit:EventEmitter<DropzoneDirective> = new EventEmitter();
    
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