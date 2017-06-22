/**
 * Created by Christophe on 20/06/2017.
 */
import {ReplaySubject} from "rxjs/Rx";
import {HittableDirective} from "./hittable.directive";

export class CollidableCouple {

    subject:ReplaySubject<HittableDirective> = new ReplaySubject<HittableDirective>(1);

    constructor(
        public sourceGroup:string,
        public targetGroup:string
    ) {}

}