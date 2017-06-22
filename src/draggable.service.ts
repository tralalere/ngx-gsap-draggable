/**
 * Created by Christophe on 07/06/2017.
 */
import {Injectable} from "@angular/core";
import {DroppableDirective} from "./droppable.directive";
import {DropzoneDirective} from "./dropzone.directive";
import {DraggableDirective} from "./draggable.directive";
import {Observable} from "rxjs/Rx";
import {CollidableCouple} from "./collidable-couple.class";
import {HittableDirective} from "./hittable.directive";

@Injectable()
export class DraggableService {

    registeredDroppables:DroppableDirective[] = [];
    registeredDropzones:DropzoneDirective[] = [];
    registeredDraggables:DraggableDirective[] = [];
    registeredCollidables:HittableDirective[] = [];
    registeredCollidablesByGroup:{[key:string]:HittableDirective[]} = {};
    collidableCouples:CollidableCouple[] = [];
    activeSourceGroups:string[] = [];
    activeTargetGroups:string[] = [];


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

    registerCollidable(collidable:HittableDirective, groups:string|string[] = null) {

        this.registeredCollidables.push(collidable);

        if (groups) {
            if (typeof groups === "string") {
                this.registerCollidableInGroup(collidable, groups);
            } else if (groups instanceof Array) {
                for (let groupName of groups) {
                    this.registerCollidableInGroup(collidable, groupName);
                }
            }
        }
    }

    registerCollidableInGroup(collidable:HittableDirective, group:string) {

        if (!this.registeredCollidablesByGroup[group]) {
            this.registeredCollidablesByGroup[group] = [];
        }

        this.registeredCollidablesByGroup[group].push(collidable);
    }

    unregisterCollidableInGroup(collidable:HittableDirective, group:string) {

    }

    unregisterCollidable(collidable:HittableDirective) {
        let index:number = this.registeredCollidables.indexOf(collidable);

        if (index !== -1) {
            this.registeredCollidables.splice(index, 1);
        }
    }

    /*setGroupAsActive(group:string) {
        if (this.activeGroups.indexOf(group) === -1) {
            this.activeGroups.push(group);
        }
    }*/

    getCollisions(sourceGroup:string, targetGroup:string):Observable<HittableDirective> {
        var couple:CollidableCouple = new CollidableCouple(sourceGroup, targetGroup);
        this.collidableCouples.push(couple);
        return couple.subject;
    }
}