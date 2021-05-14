import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { RiEditBoxLine, RiDeleteBin2Fill } from 'react-icons/ri'

const UserList = () => {
    const data = {
        users: [
            { "id_usuario":"1", "nombre_usuario":"Stone", "rol": "boss", "email": "test@test.com"},
            { "id_usuario":"2", "nombre_usuario":"Grobit", "rol": "boss", "email": "test@test.com"},
            { "id_usuario":"3", "nombre_usuario":"Tester", "rol": "boss", "email": "test@test.com"}
        ]
    }

    const [usuarios, ] = useState(data)

    return (
        <div className='main flex-column container mt-2'>
            <h3 className='mx-auto'>Lista de usuarios:</h3>
            <Table>
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                            <th>Nombre</th>
                            <th>Posicion</th>
                            <th className="text-right">Correo</th>
                        <th className="text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.users.map((users) => {
                            return (
                                <tr key={users.id_usuario}>
                                    <td>{users.id_usuario}</td>
                                    <td>{users.nombre_usuario}</td>
                                    <td>{users.rol}</td>
                                    <td>{users.email}</td>                             
                                    <td className="td-actions text-right">
                                    <Button
                                        className="btn-link btn-xs mx-2"
                                        onClick={(e) => e.preventDefault()}
                                        variant="success"
                                    >
                                        <RiEditBoxLine />
                                    </Button>
                                    <Button
                                        id={users.id_usuario}
                                        className="btn-link btn-xs mx-2"
                                        onClick={(e) => e.preventDefault()}
                                        variant="danger"
                                    >
                                        <RiDeleteBin2Fill />
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }    
                </tbody>
            </Table>
                {(usuarios.length === 0 ?
                    <p>Cargando...</p>
                    :
                    '' 
                    )
                }
        </div>        
    );
    }
 
export default UserList;