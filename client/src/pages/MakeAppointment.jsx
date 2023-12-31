import React from 'react'

const MakeAppointment = () => {
  

  const tabs = ['id', 'doctor', 'phone', 'Date & Time', 'status'];

  return (
          

<div class="w-full mx-2 ">
<h1 className='m-2 text-2xl text-center capitalize'>Appointements</h1>
    <table class="w-full rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
                {
                tabs.map((tab, index) => (
                      <th key={index} scope="col" class="px-6 py-3">
                        {tab}
                      </th>
                ))}
                </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {/* fetch data here */}
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default MakeAppointment
