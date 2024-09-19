import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { StatusOptionType, Task } from "../../types/types";
import Chip from "../chip/Chip"
import StatusDropdown from "../inputs/Dropdown";
import { updateTask } from "../../redux/tasksSlice";
import IconButton from "../buttons/IconButton";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import { useState } from "react";
import Expandable from "../expandable/Expandable";
interface TaskItemProps {
    task: Task;
    onUpdate: (task: Task) => void;
    onDelete: (task: Task) => void;
}
const TaskItem: React.FC<TaskItemProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const { task, onUpdate, onDelete } = props;
    const handleStatusChange = (status: StatusOptionType) => {
        const updatedTask: Task = { ...task, status };
        dispatch(updateTask(updatedTask));
    }
    const handleExpand = (isExpanded: boolean) => {
        setIsExpanded(isExpanded);
    }

    return (
        <>
            <div className="card  px-24 py-16" >
                <div className="flex flex-md-row justify-between">
                    <div onClick={() => handleExpand(!isExpanded)}>
                        <h1 title={task.description}>{task.title}</h1>
                        {!!task.categories && <div className="flex flex-wrap gap-8">
                            {task.categories.map((category: string) => (
                                <Chip key={`${task.id}${category}`} text={category} />
                            ))}

                        </div>}
                        {!!task.description && <Expandable isExpanded={isExpanded} onToggle={handleExpand}>
                            <p>{task.description}</p>
                        </Expandable>}
                    </div>
                    <div className="flex flex-wrap items-center gap-8">
                        <StatusDropdown onChange={handleStatusChange} value={task.status} />
                        <IconButton aria-label="edit task" onClick={() => onUpdate(task)}>
                            <EditIcon />
                        </IconButton>

                        <IconButton aria-label="delete task" onClick={() => onDelete(task)}>
                            <DeleteIcon size={24} />
                        </IconButton>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskItem

