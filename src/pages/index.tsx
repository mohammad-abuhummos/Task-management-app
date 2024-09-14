import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/filter/Filter";
import FilterGroup from "../components/filter/FilterGroup";
import Header from "../components/header/Header";
import { fetchTasks, updateTask } from "../redux/tasksSlice";
import { FilterType, StatusFilterOptionType, Task } from "../types/types";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { categoriesOptions, statusOptions } from "../utils/options";
import DeleteTaskModal from "../components/modal/DeleteTaskModal";
import TaskModal from "../components/modal/TaskModel";
import TaskItem from "../components/task/TaskItem";
import Placeholder from "../components/placeholders/Placeholder";

function HomePage() {
    const dispatch: AppDispatch = useDispatch();
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] =
        useState<boolean>(false);
    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] =
        useState<boolean>(false);

    const [filter, setFilter] = useState<FilterType>({
        category: "all",
        status: "all",
    });

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    useEffect(() => { }, [tasks]);

    const handleOptionChangeStatus = (value: string) => {
        const newFilter: FilterType = {
            ...filter,
            status: value.toLowerCase() as StatusFilterOptionType,
        };
        handleFilterChange(newFilter);
    };
    const handleOptionChangeCategories = (value: string) => {
        const newFilter: FilterType = { ...filter, category: value.toLowerCase() };
        handleFilterChange(newFilter);
    };

    const handleFilterChange = (newFilter: FilterType) => {
        setFilter(newFilter);
        dispatch(fetchTasks(newFilter));
    };

    const handleTaskUpdate = (newTask: Task) => {
        setSelectedTask(newTask);
        setIsEditTaskModalOpen(true);
    };
    const handleTaskDelete = (task: Task) => {
        setSelectedTask(task);
        setIsDeleteTaskModalOpen(true);
    };
    const handleSaveEdit = (newTask: Task) => {
        dispatch(updateTask(newTask!));
        setIsEditTaskModalOpen(false);
        setSelectedTask(null);
    };

    return (
        <>
            <div className="container">
                <Header />
                <div className="flex flex-md-row gap-32 justify-between pt-24">
                    <Filter>
                        <div className="pt-4">
                            <FilterGroup
                                value={filter.status}
                                name="test"
                                title="Completion Status"
                                options={["all", ...statusOptions]}
                                onOptionChange={handleOptionChangeStatus}
                            />
                        </div>
                        <div className="pt-40">
                            <FilterGroup
                                value={filter.category}
                                name="Categories"
                                title="Categories"
                                options={["all", ...categoriesOptions]}
                                onOptionChange={handleOptionChangeCategories}
                            />
                        </div>
                    </Filter>
                    <div className="w-full flex flex-col gap-8">
                        {tasks.length == 0 && <Placeholder />}
                        {tasks.map((task: Task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onUpdate={handleTaskUpdate}
                                onDelete={handleTaskDelete}
                            />
                        ))}
                    </div>
                </div>

                {!!selectedTask && (
                    <DeleteTaskModal
                        task={selectedTask}
                        isOpen={isDeleteTaskModalOpen}
                        onClose={() => {
                            setIsDeleteTaskModalOpen(false);
                        }}
                    />
                )}

                {!!isEditTaskModalOpen && !!selectedTask && (
                    <TaskModal
                        task={selectedTask!}
                        title="Edit Task"
                        isOpen={isEditTaskModalOpen}
                        onClose={() => {
                            setIsEditTaskModalOpen(false);
                        }}
                        actionName="Edit"
                        onSave={(task) => handleSaveEdit(task)}
                    />
                )}
            </div>
        </>
    );
}

export default HomePage;
