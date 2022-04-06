import React, {useState} from "react"
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [

{
    id: 1,
    name: "Hulk",
    descripcion: "Marvel",
},
{
    id: 2,
    name: "Spiderman",
    descripcion: "Marvel",
},
{
    id: 3,
    name: "Black Phanter",
    descripcion: "Marvel",
},
{
    id: 4,
    name: "Thor",
    descripcion: "Marvel",
},
{
    id: 5,
    name: "Ironman",
    descripcion: "Marvel",
},

];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db,data]);
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            '¿Estás seguro de eliminar?'
            );

            if(isDelete){
                let newData = db.filter((el) => el.id !== id);
                setDb(newData);

            }else {
                return;
            }
    };


    return(
        <div>
            <h2>Crud App</h2>
            <CrudForm createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}
            />

            <CrudTable 
            data={db} 
            setDataToEdit= {setDataToEdit}
            deleteData={deleteData}
            />
            
        </div>
    );
};

export default CrudApp