import { useState } from "react";
import AnimatedButton from "../buttons/AnimatedButton"
import TaskModal from "../modal/TaskModel";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Task } from "../../types/types";
import { addTask } from "../../redux/tasksSlice";


function Header() {
  const dispatch: AppDispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSave = (newTask: Task) => {
    dispatch(addTask(newTask));
    closeModal();
  }
  return (
    <>
      <div className="card flex flex-md-row justify-between items-center p-32">
        <h1>Task Management</h1>
        <AnimatedButton onClick={openModal} text="Create Task" />
        <TaskModal title="Create New Task" isOpen={isModalOpen} onClose={closeModal} actionName="Create" onSave={handleSave} />
      </div>
    </>
  )
}

export default Header
