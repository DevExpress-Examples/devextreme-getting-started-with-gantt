import { Injectable } from '@angular/core';

export interface Task {
  id: number;

  parentId: number;

  title: string;

  start: Date;

  end: Date;

  progress: number;
}

export interface Dependency {
  id: number;

  predecessorId: number;

  successorId: number;

  type: number;
}

export interface Resource {
  id: number;

  text: string;
}

export interface ResourceAssignment {
  id: number;

  taskId: number;

  resourceId: number;
}

const tasks: Task[] = [{
  id: 1,
  parentId: -1,
  title: 'Software Development',
  start: new Date('2019-02-21T05:00:00.000Z'),
  end: new Date('2019-05-04T12:00:00.000Z'),
  progress: 31,
}, {
  id: 2,
  parentId: 1,
  title: 'Scope',
  start: new Date('2019-02-21T05:00:00.000Z'),
  end: new Date('2019-02-26T09:00:00.000Z'),
  progress: 60,
}, {
  id: 3,
  parentId: 2,
  title: 'Determine project scope',
  start: new Date('2019-02-21T05:00:00.000Z'),
  end: new Date('2019-02-21T09:00:00.000Z'),
  progress: 100,
}];

const dependencies: Dependency[] = [{
  id: 1,
  predecessorId: 1,
  successorId: 2,
  type: 0,
}, {
  id: 2,
  predecessorId: 2,
  successorId: 3,
  type: 0,
}];

const resources: Resource[] = [{
  id: 1,
  text: 'Management',
}];

const resourceAssignments: ResourceAssignment[] = [{
  id: 0,
  taskId: 3,
  resourceId: 1,
}];

@Injectable()
export class Service {
  getTasks(): Task[] {
    return tasks;
  }

  getDependencies(): Dependency[] {
    return dependencies;
  }

  getResources(): Resource[] {
    return resources;
  }

  getResourceAssignments(): ResourceAssignment[] {
    return resourceAssignments;
  }
}
