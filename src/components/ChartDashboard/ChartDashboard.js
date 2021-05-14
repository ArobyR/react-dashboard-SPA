import React from 'react';
import { BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const ChartDashboard = () => {
    const data = [
        {
        dia: 'Dia A',
        cancelados: 4000,
        atendidos: 2400,
        },
        {
        dia: 'Dia B',
        cancelados: 3000,
        atendidos: 1398,
        },
        {
        dia: 'Dia C',
        cancelados: 2000,
        atendidos: 9800,
        },
        {
        dia: 'Dia D',
        cancelados: 2780,
        atendidos: 3908,
        },
        {
        dia: 'Dia E',
        cancelados: 1890,
        atendidos: 4800,
        },
        {
        dia: 'Dia F',
        cancelados: 2390,
        atendidos: 3800,
        },
        {
        dia: 'Dia G',
        cancelados: 3490,
        atendidos: 4300,
        },
    ];
    
    return (
        <ResponsiveContainer className='container mt-4' width={980} height={650}>
            <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cancelados" fill="#ee400b"  />
                <Bar dataKey="atendidos" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>  
    );
}
 
export default ChartDashboard;