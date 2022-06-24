import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

export const Chart1 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const data = {
    labels,
    datasets: [
      {
        label: 'Visitor',
        data: [200, 260, 300, 220, 380, 414, 508],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  return (
    <>
        <div className='bg-white h-fit p-4 rounded-lg flex flex-col space-y-6 drop-shadow-md'>
          <p className='text-lg font-medium text-purple-900 px-4'>Visitor</p>
          <Bar data={data} options={options} />
        </div>
    </>
  )
}

export const Chart3 = () => {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '# of Votes',
        data: [120, 190],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true
  }
  return (
    <>
      <div className='bg-white p-4 rounded-lg flex flex-col space-y-6 drop-shadow-md'>
        <p className='text-lg font-medium text-purple-900 px-4'>Visitor</p>
        <Doughnut data={data} options={options} />
      </div>
    </>
  )
}
