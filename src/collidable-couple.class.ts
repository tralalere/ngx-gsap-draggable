/**
 * Created by Christophe on 20/06/2017.
 */
import {ReplaySubject} from "rxjs/Rx";
import {DraggableDirective} from "./draggable.directive";

export class CollidableCouple {

    subject:ReplaySubject<DraggableDirective> = new ReplaySubject<DraggableDirective>(1);

    constructor(
        public sourceGroup:string,
        public targetGroup:string
    ) {}

}