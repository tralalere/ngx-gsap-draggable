/**
 * Created by Christophe on 07/06/2017.
 */
import {Directive, OnInit, OnDestroy, ElementRef, Input, Output, EventEmitter} from "@angular/core";
import {DraggableService} from "./draggable.service";
import {DroppableDirective} from "./droppable.directive";

@Directive({
    selector: "[dropzone]"
})
export class DropzoneDirective implements OnInit, OnDestroy {
    
    @Input() dropzone:boolean = true;
    @Input() groups:string|string[];
    
    @Output() onDropped:EventEmitter<DroppableDirective> = new EventEmitter();
    @Output() onHit:EventEmitter<DroppableDirective> = new EventEmitter();
    @Output() onGroupHit:EventEmitter<DroppableDirective> = new EventEmitter();
    
    constructor(
        public element:ElementRef,
        private draggableService:DraggableService
    ) {}
    
    ngOnInit() {
        this.draggableService.registerDropzone(this);
    }

    ngOnDestroy() {
        this.draggableService.unregisterDropzone(this);
    }
}