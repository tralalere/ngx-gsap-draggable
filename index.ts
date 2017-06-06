/**
 * Created by reunion on 15/05/2017.
 */
import {NgModule} from "@angular/core";
import {DraggableDirective} from "./src/draggable.directive";

export * from "./src/draggable.directive";


@NgModule({
    declarations: [
        DraggableDirective
    ],
    exports: [
        DraggableDirective
    ]
})
export class DraggableModule {

}
