'use client'
import { useSearchParams } from 'next/navigation';
import BookingForm from '../../components/BookingForm';

export default function BookingFormLoader() {
  const searchParams = useSearchParams();
  const bid = searchParams.get('bid');
  const initialData = bid ? {
    bid,
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    dateIso: searchParams.get('dateIso') || '',
    time: searchParams.get('time') || '',
    adults: searchParams.get('adults') || '10',
    children: searchParams.get('children') || '0',
    street: searchParams.get('street') || '',
    city: searchParams.get('city') || '',
    state: searchParams.get('state') || '',
    zip: searchParams.get('zip') || '',
    occasion: searchParams.get('occasion') || '',
    notes: searchParams.get('notes') || '',
  } : null;
  return <BookingForm initialData={initialData} />;
}
