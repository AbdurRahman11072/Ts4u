"use client"

import { useState } from "react"
import ReactApexChart from 'react-apexcharts'

const UserGender = () => {
    const [chartdata,setchartdata] = useState({
          
        series: [67.5, 42.5, ],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Male', 'Female'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      }
    
)
    return (
        <div >
            
                <h1 className="w-[100%] mb-8 pb-4 border-b-[2px] border-gray-400 text-2xl font-bold">User</h1>
           
            <div className="flex justify-center items-center">
            <ReactApexChart options={chartdata.options} series={chartdata.series} type="pie" height={450} />
            </div>
        </div>
    )
}

export default UserGender