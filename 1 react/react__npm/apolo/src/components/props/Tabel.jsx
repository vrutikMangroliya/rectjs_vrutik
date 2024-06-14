import React from 'react'

const Tabel = () => {
  return (
    

<div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                    <thead class="border-b">
                        <tr>
                    <div class="flex items-center p-4">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Id</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Website</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Company name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <div class="flex items-center p-4">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Leanne Graham</td>
                                <td class="text-sm text-sky-600 font-medium px-6 py-4 whitespace-nowrap">Sincere@april.biz</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">1-770-736-8031 x56442</td>
                                <td class="text-sm text-sky-600 font-medium px-6 py-4 whitespace-nowrap">hildegard.org</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Romaguera-crona</td>
                        </tr>
                        <tr class="border-b">
                            <div class="flex items-center p-4">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Leanne Graham</td>
                                <td class="text-sm text-sky-600 font-medium px-6 py-4 whitespace-nowrap">Sincere@april.biz</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">1-770-736-8031 x56442</td>
                                <td class="text-sm text-sky-600 font-medium px-6 py-4 whitespace-nowrap">hildegard.org</td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Romaguera-crona</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tabel