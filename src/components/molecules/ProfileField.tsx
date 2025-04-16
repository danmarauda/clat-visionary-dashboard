
import React from 'react';

interface ProfileFieldProps {
  label: string;
  value: string | number;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value }) => {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <p className="mt-1">{value}</p>
    </div>
  );
};

export default ProfileField;
