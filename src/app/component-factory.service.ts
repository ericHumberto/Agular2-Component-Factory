import { Injectable, Component } from '@angular/core';
import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';

export class ComponentFactoryService {

  constructor() { }

  // tslint:disable-next-line:member-ordering
  static getComponent(componentId: number): any {
    switch (componentId) {
      case 1: return {
        component: HelloWorldComponent,
        inputs: {
          showNum: 9
        }
      };

      case 2: return {
        component: WorldHelloComponent,
        inputs: {
          showNum: 9
        }
      };
    };

    return null;
  }
}
