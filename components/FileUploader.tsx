"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

export default function MyDropzone({ ownerId, accountId, className }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {}, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button
        type="button"
        className={cn("uploader-button", className)}
      ></Button>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
