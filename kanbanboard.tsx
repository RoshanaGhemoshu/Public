import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

const KanbanBoard: React.FC = () => {
  const initialData = {
    columns: {
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: ["task-1", "task-2"],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        taskIds: ["task-3"],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: [],
      },
    },
    tasks: {
      "task-1": { id: "task-1", content: "Task A" },
      "task-2": { id: "task-2", content: "Task B" },
      "task-3": { id: "task-3", content: "Task C" },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  };

  const onDragEnd = (result: DropResult) => {
    // Handle drag-and-drop logic
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
