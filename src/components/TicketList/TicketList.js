import { Table } from 'react-bootstrap';
import React, { useState } from 'react'
// import { getAllTickets } from '../../services/ticket/tickets';

const TicketList = () => {
    const data = {
        ticket: [
            {"id_ticket": 1, "codigo_ticket": "23r", "prioridad": "high", "created_at": "today"},
            {"id_ticket": 2, "codigo_ticket": "232rf", "prioridad": "high", "created_at": "today"},
            {"id_ticket": 3, "codigo_ticket": "239z1", "prioridad": "high", "created_at": "today"}
        ]
    }

    const [tickets, ] = useState(data)
    // const [loading, setLoading] = useState(false)
    
    // useEffect peticion a la API
    // useEffect(() => {
    //     (async () => {
    //         setLoading(true)
    //         const information = await getAllTickets();
    //         setTickets(information)
    //         setLoading(false)
    //     })();
    // }, []);

    return (
        <div className='container mt-3'>
            {/* {loading ? 'Cargando...' : ''} */}
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ticket</th>
                        <th>Prioridad</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tickets.ticket.map(data => (
                        <tr key={data.id_ticket}>
                            <td>{data.id_ticket}</td>
                            <td>{data.codigo_ticket}</td>
                            <td>{data.prioridad}</td>
                            <td>{data.created_at}</td>
                        </tr>
                    ))
                    }              
                </tbody>
            </Table>     
        </div>
    );
}
 
export default TicketList;