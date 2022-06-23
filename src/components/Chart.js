import { Bar, BarChart, CartesianGrid, Cell, LabelList, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'

export const Chart1 = () => {
  const data = [
    {
      name: 'Jan',
      uv: 1000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Mar',
      uv: 4300,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'May',
      uv: 2890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Jun',
      uv: 3390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Aug',
      uv: 3900,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Sep',
      uv: 5090,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Okt',
      uv: 6800,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Nov',
      uv: 3200,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Des',
      uv: 4490,
      pv: 4300,
      amt: 2100
    }
  ]
  return (
    <>
        <div className='bg-white p-4 rounded-lg flex flex-col space-y-6 drop-shadow-md'>
          <p className='text-lg font-medium text-purple-900 px-4'>Visitor</p>
          <BarChart width={650} height={300} data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 4" />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
            <XAxis dataKey='name' />
            <YAxis />
          </BarChart>
        </div>
    </>
  )
}

export const Chart2 = () => {
  const data = [
    {
      name: 'Male',
      value: 400
    },
    {
      name: 'Female',
      value: 300
    }
  ]

  const COLORS = ['#0088FE', '#00C49F']
  return (
    <>
      <div className='bg-white p-4 rounded-lg flex flex-col drop-shadow-md'>
      <p className='text-lg font-medium text-teal-900 px-4'>Visitor Profile</p>
        <PieChart width={250} height={300}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill='#8884d8' label>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <LabelList dataKey='name' position='bottom' />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </>
  )
}
