<template>
  <DxGantt
    :height="250"
    :width="800"
    :root-value="-1"
  >
    <DxTasks :data-source="tasks"/>
    <DxDependencies :data-source="dependencies"/>
    <DxResources :data-source="resources"/>
    <DxResourceAssignments :data-source="resourceAssignments"/>
    <DxColumn
      :width="300"
      data-field="title"
      caption="Subject"
    />
    <DxColumn
      data-field="start"
      caption="Start Date"
    />
    <DxColumn
      data-field="end"
      caption="End Date"
    />
  </DxGantt>
</template>
<script>
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.min.css';
import {
  DxGantt,
  DxTasks,
  DxDependencies,
  DxResources,
  DxResourceAssignments,
  DxColumn,
} from 'devextreme-vue/gantt';

import {
  tasks,
  dependencies,
  resources,
  resourceAssignments,
} from './data.js';

export default {
  components: {
    DxGantt,
    DxTasks,
    DxDependencies,
    DxResources,
    DxResourceAssignments,
    DxColumn,
  },
  data() {
    return {
      tasks,
      dependencies,
      resources,
      resourceAssignments,
    };
  },
};
</script>
