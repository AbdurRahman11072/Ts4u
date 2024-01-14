"use client"

import { useState } from "react"
import ReactApexChart from 'react-apexcharts'

const UserCountry = () => {
    const [chartdata,setchartdata] = useState({
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ["Bangaldes", "India", "Vutan", "Napel", "Indonisia"],
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
        <div>
           <h1 className="w-[100%] mb-8 pb-4 border-b-[2px] border-gray-400 text-2xl font-bold">User Country</h1>
           <div className="flex justify-center items-center">
            <ReactApexChart options={chartdata.options} series={chartdata.series} type="donut" height={450} />
            </div>
        </div>
    )
}

export default UserCountry