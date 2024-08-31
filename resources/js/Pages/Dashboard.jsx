import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
      
      const Series = [
        {
          label: 'React Charts',
          data: [
            {
              date: new Date(),
              stars: 202123,
            }
            // ...
          ]
        },
        {
          label: 'React Query',
          data: [
            {
              date: new Date(),
              stars: 10234230,
            }
            // ...
          ]
        }
      ];

      const primaryAxis = React.useMemo(
        (): AxisOptions<DailyStars> => ({
          getValue: datum => datum.date,
        }),
        []
      )
      const secondaryAxes = React.useMemo(
        (): AxisOptions<DailyStars>[] => [
          {
            getValue: datum => datum.stars,
          },
        ],
        []
      )

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
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
