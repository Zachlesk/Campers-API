const ulrEstudiantes = "http://localhost/ArTeM02-066/Campers-API/backend/controllers/campers.php?op=getAll"


export const getEstudaintes = async () =>{
    try{
        const result = await fetch (ulrEstudiantes);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}