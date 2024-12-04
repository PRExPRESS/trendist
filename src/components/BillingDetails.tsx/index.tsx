import React from 'react';
import { Input } from '@material-tailwind/react';

const BillingDetails = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

      <div className="space-y-4">
        <div>
          <Input {...({}as any)} label="Full Name" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="Email Address" type="email" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="Phone Number" type="tel" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="Address" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="City" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="Postal Code" className="w-full" />
        </div>
        <div>
          <Input {...({}as any)} label="Country" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
