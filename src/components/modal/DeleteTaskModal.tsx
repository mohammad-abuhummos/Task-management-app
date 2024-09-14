import Modal from "./Modal";
import { Task } from "../../types/types";

import deleteIcon from '../../assets/icons/deleteIcon.svg';
import Button from "../buttons/Button";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";


interface DeleteTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();

    const { isOpen, onClose, task } = props;

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
        onClose();
    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <div
                className="modal-content card"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="delete-header">
                    <img src={deleteIcon} alt="delete icon" className="pb-8" />
                </div>
                <div className="delete-body py-24 px-40 text-center">
                    <h1>Delete Task!</h1>
                    <p>Are you sure that you want to delete <span className="font-bold">{task?.title}</span>?</p>
                    <div className="flex flex-md-row gap-8">
                        <Button onClick={onClose}>Cancel</Button>
                        <Button color="tertiary" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default DeleteTaskModal;
