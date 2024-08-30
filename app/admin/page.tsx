"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import {DataTable} from '@/components/table/DataTable'
import {columns} from '@/components/table/columns'

const Admin = () => {
    const [appointments, setAppointments] = React.useState({totalCounts: 0, pendingCount: 0, cancelledCount: 0, scheduledCount: 0, documents: []});
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
      const f = () => {
        getRecentAppointmentList().then((data) => {
            setAppointments(data);
            setIsLoading(false);
        });
      }
      const id = setInterval(f, 1000);
      f();
      return () => clearInterval(id);
      
    }, []);

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>

      <header className='admin-header flex justify-between items-center py-4'>
        <div className='flex items-center'>
          <Link href="/" className='cursor-pointer flex items-center'>
            <Image
              src='/assets/icons/logo-full.svg'
              alt='CarePulse Logo'
              height={32}
              width={162}
              className='h-8 w-fit'
            />
          </Link>
        </div>
        <p className='text-16-semibold text-white'>Admin Dashboard</p>
      </header>



        <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments.
          </p>
        </section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>}
        {!isLoading && <DataTable columns={columns} data={appointments.documents} />}
        


      </main>
    </div>
  )
}

export default Admin;