
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Save, X } from 'lucide-react';
import { toast } from 'sonner';

interface EditableSectionProps {
  title: string;
  content: React.ReactNode;
  onSave?: (content: any) => void;
  editComponent: React.ReactElement;
  editValues: any;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  title,
  content,
  onSave,
  editComponent,
  editValues
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(editValues);
  
  const handleSave = () => {
    if (onSave) {
      onSave(values);
      toast.success("Changes saved successfully");
    }
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setValues(editValues);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Clone the edit component with the current values and update handler
  const editWithProps = React.cloneElement(editComponent, {
    values,
    onChange: (newValues: any) => setValues(newValues)
  });

  return (
    <div className="glass rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              <X className="h-4 w-4 mr-1" />
              Cancel
            </Button>
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        )}
      </div>
      
      {isEditing ? (
        <div className="bg-card/50 rounded-md p-4 border border-border">
          {editWithProps}
        </div>
      ) : (
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      )}
    </div>
  );
};

export default EditableSection;
