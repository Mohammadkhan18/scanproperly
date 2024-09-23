import React, { useState, ChangeEvent } from "react";
import { useController } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface ImageUploadProps {
  control: any; // Type can be more specific based on the form's control type
  name: string;
  initialImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  control,
  name,
  initialImage,
}) => {
  const { field } = useController({ name, control });
  const [image, setImage] = useState<string | null>(
    initialImage || field.value || null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setImage(imageUrl);
        field.onChange(event.target.files); // Notify React Hook Form about the change
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    field.onChange(null); // Notify React Hook Form about the change
    document.getElementById("fileInput")?.setAttribute("value", ""); // Clear file input value
  };

  return (
    <div className="flex flex-col items-center justify-center border-[1px] h-48 rounded-md border-dashed border-gray-300">
      {!image && (
        <label className="cursor-pointer">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 hidden "
          />
          <div className="flex items-center gap-5">
            {" "}
            <IoCloudUploadOutline className="text-primary text-[25px]" />{" "}
            <p>Upload Image</p>
          </div>
        </label>
      )}

      {image && (
        <div className="flex items-start ">
          <img
            src={image}
            alt="Uploaded"
            className="max-w-xs max-h-48 object-cover rounded-lg border border-gray-300 mr-4"
          />
          <button
            onClick={handleRemoveImage}
            className="bg-red-500 text-white py-2 px-2 rounded-lg hover:bg-red-600 transition"
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
