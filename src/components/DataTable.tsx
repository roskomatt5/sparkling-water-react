import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from "../api/servers";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  { field: "brand", headerName: "Brand", flex: 1 },
  { field: "flavor", headerName: "Flavor", flex: 1 },
];

function DataTable() {
  let [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <Modal id={selectionModel} open={open} onClose={handleClose} />
      <div className="flex flex-row">
        <div>
          <button
            className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
            onClick={() => handleOpen()}
          >
            Add To Inventory
          </button>
        </div>
        <Button
          onClick={handleOpen}
          className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
        >
          Update
        </Button>
        <Button
          onClick={deleteData}
          className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
        >
          Delete
        </Button>
      </div>
      <div
        className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: "100%" }}
      >
        <h2 className="p-3 bg-black text-white my-2 rounded">Your Fridge</h2>
        <DataGrid
          rows={contactData}
          columns={columns}
          rowsPerPageOptions={[5]}
          checkboxSelection={true}
          onSelectionModelChange={(item: any) => {
            setSelectionModel(item);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;
