'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import CustomFormField from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { useState } from 'react';
import { UserFormValidation } from '@/lib/validation';
import { useRouter } from 'next/navigation';
import { createUser } from '@/lib/actions/patient.actions';

export enum FormFieldType {
  Input = 'input',
  Textarea = 'textarea',
  PhoneInput = 'PhoneInput',
  Checkbox = 'checkbox',
  DatePicker = 'datePicker',
  Select = 'select',
  Skeleton = 'skeleton',
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = {
        name: name,
        email: email,
        phone: phone,
      };
      const user = await createUser(userData);
      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Schedule your fist appointment</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.Input}
          control={form.control}
          name='name'
          label='Full name'
          placeholder='John Doe'
          iconSrc='/assets/icons/user.svg'
          iconAlt='User'
        />

        <CustomFormField
          fieldType={FormFieldType.Input}
          control={form.control}
          name='email'
          label='Email'
          placeholder='johndoe@gmail.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='Email'
        />

        <CustomFormField
          fieldType={FormFieldType.PhoneInput}
          control={form.control}
          name='phone'
          label='Phone number'
          placeholder='+33 1 23 45 67 89'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
