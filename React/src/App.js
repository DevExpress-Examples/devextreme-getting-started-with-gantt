import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.min.css';
import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column,
} from 'devextreme-react/gantt';

import {
  tasks, dependencies, resources, resourceAssignments,
} from './data.js';

function App() {
  return (
    <Gantt
      height={250}
      width={800}
      rootValue={-1}>

      <Tasks dataSource={tasks} />
      <Dependencies dataSource={dependencies} />
      <Resources dataSource={resources} />
      <ResourceAssignments dataSource={resourceAssignments} />

      <Column dataField="title" caption="Subject" width={300} />
      <Column dataField="start" caption="Start Date" />
      <Column dataField="end" caption="End Date" />
    </Gantt>
  );
}

export default App;
