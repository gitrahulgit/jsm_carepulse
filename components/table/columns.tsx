// "use client";

// import { ColumnDef } from "@tanstack/react-table";
// import Image from "next/image";

// import { Doctors } from "@/constants";
// import { formatDateTime } from "@/lib/utils";
// import { Appointment } from "@/types/appwrite.types";

// import { AppointmentModal } from "../AppointmentModal";
// import { StatusBadge } from "../StatusBadge";

// export const columns: ColumnDef<Appointment>[] = [
//   {
//     header: "#",
//     cell: ({ row }) => {
//       return <p className="text-14-medium ">{row.index + 1}</p>;
//     },
//   },
//   {
//     accessorKey: "patient",
//     header: "Patient",
//     cell: ({ row }) => {
//       const appointment = row.original;
//       return <p className="text-14-medium ">{appointment.patient.name}</p>;
//     },
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const appointment = row.original;
//       return (
//         <div className="min-w-[115px]">
//           <StatusBadge status={appointment.status} />
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "schedule",
//     header: "Appointment",
//     cell: ({ row }) => {
//       const appointment = row.original;
//       return (
//         <p className="text-14-regular min-w-[100px]">
//           {formatDateTime(appointment.schedule).dateTime}
//         </p>
//       );
//     },
//   },
//   {
//     accessorKey: "primaryPhysician",
//     header: "Doctor",
//     cell: ({ row }) => {
//       const appointment = row.original;

//       const doctor = Doctors.find(
//         (doctor) => doctor.name === appointment.primaryPhysician
//       );

//       return (
//         <div className="flex items-center gap-3">
//           <Image
//             src={doctor?.image!}
//             alt="doctor"
//             width={100}
//             height={100}
//             className="size-8"
//           />
//           <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
//         </div>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: () => <div className="pl-4">Actions</div>,
//     cell: ({ row }) => {
//       const appointment = row.original;

//       return (
//         <div className="flex gap-1">
//           <AppointmentModal
//             patientId={appointment.patient.$id}
//             userId={appointment.userId}
//             appointment={appointment}
//             type="schedule"
//             title="Schedule Appointment"
//             description="Please confirm the following details to schedule."
//           />
//           <AppointmentModal
//             patientId={appointment.patient.$id}
//             userId={appointment.userId}
//             appointment={appointment}
//             type="cancel"
//             title="Cancel Appointment"
//             description="Are you sure you want to cancel your appointment?"
//           />
//         </div>
//       );
//     },
//   },
// ];

"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import { StatusBadge } from "../StatusBadge"
import { formatDateTime } from "@/lib/utils"
import { Doctors } from "@/constants"
import Image from "next/image"
import AppointmentModal from "../AppointmentModal"
import { Appointment } from "@/types/appwrite.types"



export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient.name",
    header: "Patient",
    cell: ({ row }) => {
      // console.log(row.original)
      return <p className="text-14-medium">{row.original.patient.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={row.original.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      const timezone = 'Asia/Kolkata';
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(row.original.schedule, timezone).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: () => "Doctor",
    cell: ({ row }) => {
      const doctor = Doctors.find((doc) => doc.name === row.original.primaryPhysician);

      return (
        <div className="flex items-center gap-3">
          {doctor && (
            <Image 
              src={doctor.image}
              alt={doctor.name}
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
          )}
          <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row: { original: data } }) => {
      
      return (

        <div className="flex gap-1">
          <AppointmentModal 
          
          type="schedule"
          patientId={data.patient.$id}
          userId={data.userId}
          appointment={data}
    

          />
          <AppointmentModal
          type="cancel"
          patientId={data.patient.$id}
          userId={data.userId}
          appointment={data}


          />
        
          </div>

      )
 
      
    },
  },
]
