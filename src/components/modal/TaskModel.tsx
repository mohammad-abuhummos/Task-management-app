import { useState } from "react";
import ChipInput from "../inputs/ChipInput";
import FloatingLabel from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Modal from "./Modal";
import { Task } from "../../types/types";
import Button from "../buttons/Button";
import { categoriesOptions } from "../../utils/options";


interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    task?: Task;
    onSave: (task: Task) => void;
    actionName: string;
}

const TaskModal: React.FC<TaskModalProps> = (props) => {

    const { isOpen, onClose, title, task, actionName, onSave } = props;
    const [name, setName] = useState<string>(task?.title ?? '');
    const [description, setDescription] = useState<string>(task?.description ?? '');
    const [categories, setCategories] = useState<string[]>(task?.categories ?? []);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('task', "task called");
        if (!title) {
            alert('Please fill out all fields.');
            return;
        }

        const newTask: Task = {
            id: task?.id ?? Date.now(),
            title: name,
            description,
            categories,
            status: task?.status ?? "incomplete",
        };
        onSave(newTask);
        setName('');
        setDescription('');
        setCategories([]);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <div
                className="modal-content card p-40"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <FloatingLabel id="task-name" label="Task Name" onChange={(e) => { setName(e.target.value) }} type="text" value={name} />
                        <Textarea id="1" label="Task description (optional)" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                        <ChipInput
                            id="multi-select"
                            label="Select Options"
                            options={categoriesOptions}
                            selectedValues={categories}
                            onChange={(values) => setCategories(values)}
                        />
                        <div className="flex gap-8">
                            <Button type="button" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="primary" type="submit">
                                {actionName}
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default TaskModal;
