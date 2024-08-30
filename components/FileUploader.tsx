"use client";
import { convertFileToUrl } from "@/lib/utils";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image"; // Ensure this is imported

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="uploaded image"
          height={100}
          width={1000}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            alt="upload"
            height={40}
            width={40}
          />
          <div className="file-upload-label">
            <p className="text-14-regular">
              <span className="text-green-500">Click to upload </span>
             or  Drag and drop
            </p>
            <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;