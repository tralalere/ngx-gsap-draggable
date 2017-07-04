# ngx-gsap-draggable

ngx-gsap-draggable is a Greensock Draggable wrapper for Angular 2+ versions.

* [Installation](#installation)
* [Usage](#usage)
* [Events and options](#eventsandoptions)
* [Incoming developments](#incomingdevelopments)
* [Change log](#changelog)

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

You can bind the [draggable] attribute to a boolean variable or expression in order to activate or deactivate the draggable directive.

```html
    <div [draggable]="booleanVariable">
        Your draggable content
    </div>
```

## Events and options

### 1. Events

#### (onDragStart)

onDragStart is fired when the user starts to drag the html element

**returns:** the original Greensock Draggable object

```html
    <div [draggable]="true" (onDragStart)="functionToCallOnDragStart($event)">
        Your draggable content
    </div>
```

#### (onDrag)

onDrag is fired when the user drags the html element, on each frame

**returns:** the original Greensock Draggable object

```html
    <div [draggable]="true" (onDrag)="functionToCallOnDrag($event)">
        Your draggable content
    </div>
```

#### (onDragEnd)

onDragEnd is fired when the user release the html element

```html
    <div [draggable]="true" (onDragEnd)="functionToCallOnDragEnd($event)">
        Your draggable content
    </div>
```

**returns:** the original Greensock Draggable object

### 2. Options

#### [ghost]

If set to true, a ghost element cloned from the original element is created on drag start, and move on each frame according to the original object position. The ghost element is always appended to the document body, and destroyed when the dragging ends.

Very useful for dragging an element out of a ```overflow: hidden``` or ```overflow: auto``` element.

```html
    <div [draggable]="true" [ghost]="true">
        Your draggable content
    </div>
```

## Incoming developments

Incoming version will implement many of the original Greensock Draggable Options.

It will also implement a observable and event based collision system.

## Change log

### [0.0.6] - 2017-07-04
#### Added
- Current and first documented version