import {AppointmentForm} from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import {Button} from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as Senrty from "@sentry/nextjs"; 

export default async function NewAppointment({params:{userId}}:SearchParamProps) {

    const patient = await getPatient(userId);

    Senrty.metrics.set("user_view_new-appointment", patient.name);
  function setIsOpen(open: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">

        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image 

            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

        <AppointmentForm 

            type="create"
            patientId={patient.$id}
            userId = {userId}
            
            
        />
          <p className="copyright mt-10 py-12">© 2024 CarePulse. All rights reserved.</p>       

        </div>
      </section>

      <Image
      
        src="/assets/images/appointment-img.png"
        alt="appointment"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      
      />
    </div>
  )



}