/**
 * Created by reunion on 15/05/2017.
 */
import {NgModule} from "@angular/core";
import {DraggableDirective} from "./src/draggable.directive";
import {DroppableDirective} from "./src/droppable.directive";
import {DropzoneDirective} from "./src/dropzone.directive";
import {DraggableService} from "./src/draggable.service";
import {HittableDirective} from "./src/hittable.directive";

export * from "./src/draggable.directive";
export * from "./src/draggable.service";
export * from "./src/droppable.directive";
export * from "./src/dropzone.directive";
export * from "./src/collidable-couple.class";
export * from "./src/hittable.directive";

@NgModule({
    declarations: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective,
        HittableDirective
    ],
    exports: [
        DraggableDirective,
        DroppableDirective,
        DropzoneDirective,
        HittableDirective
    ],
    providers: [
        DraggableService
    ]
})
export class DraggableModule {

}
