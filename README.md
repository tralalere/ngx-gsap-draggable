# ngx-gsap-draggable

ngx-gsap-draggable is a Greensock Draggable wrapper for Angular 2+ versions.

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

## Installation

You need to install the npm module to use it:

```sh
npm install ngx-gsap-draggable --save
```

## Usage

#### 1. Import the `DraggableModule`:
You have to import `DraggableModule` in the NgModule you want to use it.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DraggableModule} from "ngx-gsap-draggable";

@NgModule({
    imports: [
        BrowserModule,
        DraggableModule
    ]
})
export class YourModule { }
```

#### 2. Use the Draggable Directive in your HTML templates

```html
    <div [draggable]="true">
        Your draggable content
    </div>
```

You can bind the [draggable] attribute to a boolean in order to activate or deactivate the draggable directive.

```html
    <div [draggable]="booleanVariable">
        Your draggable content
    </div>
```

## API