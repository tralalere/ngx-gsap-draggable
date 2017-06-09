/**
 * Created by Christophe on 09/06/2017.
 */
import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
    selector: "[collidable]"
})
export class CollidableDirective {

    @Input() collidable:boolean;

    constructor(
        public element:ElementRef
    ) {}
}