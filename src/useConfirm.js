import { type } from "@testing-library/user-event/dist/type";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    return;
  }

  const cofirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return cofirmAction;
};

const UseConfirm = () => {
  const deleteWord = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");

  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  return (
    <div>
      <button onClick={confirmDelete}>Delete the word</button>
    </div>
  );
};

export default UseConfirm;
