"use client"
import { useState } from "react"
import ReactApexChart from 'react-apexcharts'

const UserGrowth = () => {
  const [chartdata, setchartdata] = useState({
          
    series: [{
      name: 'series1',
      data: [31, 40, 80, 51, 42, 70, 80]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Sat', 'Sun', 'Mon', 'Thu', 'Wed', 'Thur', 'Fri'],
      },
      tooltip: {
        title: {
          text: '$ (thousands)'
        }
      },
    },
  
  
  }
)

  return (
     <div id="chart">
      <h1 className="w-[100%] mb-8 pb-4 border-b-[2px] border-gray-400 text-2xl font-bold"> User Growth</h1>
  <ReactApexChart  options={chartdata.options} series={chartdata.series} type="area" height={350} />
</div>
  )
}

export default UserGrowth