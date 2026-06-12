import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxGanttModule } from 'devextreme-angular';
import {
  Service, Task, Dependency, Resource, ResourceAssignment,
} from './app.service';

@Component({
  selector: 'app-root',
  imports: [DxGanttModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  tasks: Task[];

  dependencies: Dependency[];

  resources: Resource[];

  resourceAssignments: ResourceAssignment[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
  }
}
