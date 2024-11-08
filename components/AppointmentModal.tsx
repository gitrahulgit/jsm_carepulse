'use client';
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { AppointmentForm } from './forms/AppointmentForm';
import { Appointment } from '@/types/appwrite.types';

/**
 * AppointmentModal component to handle displaying a dialog for scheduling or canceling appointments.
 *
 * @param type - The operation type for the modal: "schedule" or "cancel".
 * @param patientId - The unique identifier for the patient associated with the appointment.
 * @param userId - The unique identifier for the user performing the action.
 * @param appointment - Optional appointment details for pre-filling the form.
 *
 * This component renders a button that opens a dialog when clicked. The dialog contains
 * the AppointmentForm component, which is used to manage the form state and submission
 * for scheduling or canceling appointments.
 */
const AppointmentModal = ({
  type,
  patientId,
  userId,
  appointment,
}:{
  type: "schedule" | "cancel",
  patientId: string,
  userId: string,
  appointment?: Appointment
}) => {

 const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild> 
    <Button variant={"ghost"} className={`capitalize ${type === "schedule" && "text-green-500"}`}>{type}</Button>
    
  </DialogTrigger>
  <DialogContent className='shad-dialog sm:max-w-md'>
    <DialogHeader className='mb-4 space-y-3'>
      <DialogTitle className='capitalize'>{type} Appointment</DialogTitle>
      <DialogDescription>
        Please fill in the following details to {type} appointment.
      </DialogDescription>
    </DialogHeader>

    <AppointmentForm 
    
    userId={userId}
    patientId={patientId}
    type={type}
    appointment={appointment}
    
    />

  </DialogContent>
</Dialog>

  )
}

export default AppointmentModal
