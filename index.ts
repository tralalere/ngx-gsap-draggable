/**
 * Created by reunion on 15/05/2017.
 */
import {NgModule} from "@angular/core";
import {DraggableDirective} from "./src/draggable.directive";
import {DroppableDirective} from "./src/droppable.directive";
import {DropzoneDirective} from "./src/dropzone.directive";
import {DraggableService} from "./src/draggable.service";
import {CollidableDirective} from "./src/collidable.directive";

export * from "./src/draggable.directive";
export * from "./src/draggable.service";
export * from "./src/droppable.directive";
export * from "./src/dropzone.directive";
export * from "./src/collidable.directive";

@NgModule({
    declarations: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective,
        CollidableDirective
    ],
    exports: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective,
        CollidableDirective
    ],
    providers: [
        DraggableService
    ]
})
export class DraggableModule {

}
