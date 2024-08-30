import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import PatientForm from '@/components/forms/PatientForm'
import * as Sentry from "@sentry/nextjs";

const Register = async ({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
<div className="flex h-screen max-h-screen">
      {/* TODO: OTP verification | PassKey Modal */}
      <section className="remove-scrollbar container">

        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image 

            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

        <RegisterForm user={user} />

        <p className='copyright py-12'>© 2024 CarePulse. All rights reserved.</p>

  

        </div>
      </section>

      <Image
      
        src="/assets/images/register-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      
      />
    </div>
  )
}

export default Register