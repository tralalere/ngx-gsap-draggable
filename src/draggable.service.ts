/**
 * Created by Christophe on 07/06/2017.
 */
import {Injectable} from "@angular/core";
import {DroppableDirective} from "./droppable.directive";
import {DropzoneDirective} from "./dropzone.directive";
import {DraggableDirective} from "./draggable.directive";
import {CollidableDirective} from "./collidable.directive";

@Injectable()
export class DraggableService {

    registeredDroppables:DroppableDirective[] = [];
    registeredDropzones:DropzoneDirective[] = [];
    registeredDraggables:DraggableDirective[] = [];
    registeredCollidables:CollidableDirective[] = [];


    registerDraggable(draggable:DraggableDirective) {
        this.registeredDraggables.push(draggable);
    }

    unregisterDraggable(draggable:DraggableDirective) {
        let index:number = this.registeredDraggables.indexOf(draggable);

        if (index !== -1) {
            this.registeredDraggables.splice(index, 1);
        }
    }

    registerDroppable(droppable:DroppableDirective) {
        this.registeredDroppables.push(droppable);
    }

    unregisterDroppable(droppable:DroppableDirective) {
        let index:number = this.registeredDroppables.indexOf(droppable);

        if (index !== -1) {
            this.registeredDroppables.splice(index, 1);
        }
    }

    registerDropzone(dropzone:DropzoneDirective) {
        this.registeredDropzones.push(dropzone);
    }

    unregisterDropzone(dropzone:DropzoneDirective) {
        let index:number = this.registeredDropzones.indexOf(dropzone);

        if (index !== -1) {
            this.registeredDropzones.splice(index, 1);
        }
    }

    registerCollidable(collidable:CollidableDirective) {
        this.registeredCollidables.push(collidable);
    }

    unregisterCollidable(collidable:CollidableDirective) {
        let index:number = this.registeredCollidables.indexOf(collidable);

        if (index !== -1) {
            this.registeredCollidables.splice(index, 1);
        }
    }
}