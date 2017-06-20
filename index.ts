/**
 * Created by reunion on 15/05/2017.
 */
import {NgModule} from "@angular/core";
import {DraggableDirective} from "./src/draggable.directive";
import {DroppableDirective} from "./src/droppable.directive";
import {DropzoneDirective} from "./src/dropzone.directive";
import {DraggableService} from "./src/draggable.service";

export * from "./src/draggable.directive";
export * from "./src/draggable.service";
export * from "./src/droppable.directive";
export * from "./src/dropzone.directive";
export * from "./src/collidable-couple.class";

@NgModule({
    declarations: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective
    ],
    exports: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective
    ],
    providers: [
        DraggableService
    ]
})
export class DraggableModule {

}
