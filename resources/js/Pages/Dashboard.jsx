import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Chart } from "react-charts";
import React from "react";

export default function Dashboard({ auth }) {
      
  const data = [
    {
      label: 'React Charts',
      data: [
        {
          date: new Date(),
          stars: 202123,
        },

      ],
    },
    {
      label: 'React Query',
      data: [
        {
          date: new Date(),
          stars: 10234230,
        },

      ],
    },
    {
      label: 'React Toolkits',
      data: [
        {
          date: new Date(),
          stars: 34230,
        },

      ],
    },
  ];

  const primaryAxis = React.useMemo(() => ({
    getValue: (datum) => datum.date,
  }), []);

  const secondaryAxes = React.useMemo(() => [
    {
      getValue: (datum) => datum.stars,
      elementType: 'bar',
    },
  ], []);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100" style={{height: '500px', width: '100%'}}>
                        <Chart
                          options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                          }}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
