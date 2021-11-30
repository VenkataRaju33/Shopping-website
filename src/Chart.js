
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Chart =(data)=> {
    const fan=data.data
  
    
        const jewel=fan.filter((item)=>item.category==="jewelery")
        const men=fan.filter((item)=>item.category==="men's clothing")
        const women=fan.filter((item)=>item.category==="women's clothing")
        const elect=fan.filter((item)=>item.category==="electronics")
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const pieData = [
        {
            "name": "men's clothing",
            "value": ((men.length/fan.length)*100)
        },
        {
            "name": "women's clothing",
            "value": ((women.length/fan.length)*100)
        },
        {
            "name": "jewelery",
            "value": ((jewel.length/fan.length)*100)
        },
        {
            "name": "electronics ",
            "value": ((elect.length/fan.length)*100)
        }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    
        return (
            <div>
            
            <PieChart width={500} height={400}>
                <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
            </div>
        )
    
}

export default Chart;