/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Camera } from "lucide-react";
import Image from "next/image";

type Props = {
  name: string;
  label?: string;
};

const NFile = ({ name, label }: Props) => {
  const { control } = useFormContext();
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("No File Chosen");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        // ✅ Show default preview if field value is URL
        useEffect(() => {
          if (field.value) {
            // Handle array with string URL
            if (Array.isArray(field.value) && field.value.length > 0) {
              const value = field.value[0];
              // Check if it's a valid URL string
              if (typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://"))) {
                setPreview(value);
                setFileName("Default File");
              }
              // Handle File object
              else if (value instanceof File) {
                setPreview(URL.createObjectURL(value));
                setFileName(value.name);
              }
            }
            // Handle direct string URL
            else if (typeof field.value === "string" && (field.value.startsWith("http://") || field.value.startsWith("https://"))) {
              setPreview(field.value);
              setFileName("Default File");
            }
          } else {
            // Reset when field value is cleared
            setPreview(null);
            setFileName("No File Chosen");
          }
        }, [field.value]);

        return (
          <div className="flex flex-col gap-2 mb-4 w-full">
            {label && (
              <label
                htmlFor={name}
                className="font-medium text-sm text-gray-700"
              >
                {label}
              </label>
            )}

            {/* Preview Box */}
            <div
              className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition"
              onClick={() => document.getElementById(name)?.click()}
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="preview"
                  width={300}
                  height={400}
                  className="h-full w-full object-contain rounded-md"
                  unoptimized={preview.startsWith("blob:")} // For blob URLs
                />
              ) : (
                <Camera className="text-green-600 w-10 h-10" />
              )}
            </div>

            {/* Hidden File Input */}
            <input
              id={name}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                field.onChange(file ? [file] : []);
                if (file) {
                  setFileName(file.name);
                  setPreview(URL.createObjectURL(file));
                } else {
                  setFileName("No File Chosen");
                  setPreview(null);
                }
              }}
            />

            {/* File info + button */}
            <div className="flex items-center justify-between border rounded-md px-3 py-1 text-sm">
              <label
                htmlFor={name}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md border cursor-pointer hover:bg-gray-200"
              >
                Choose File
              </label>
              <span className="text-gray-500 truncate max-w-[200px]">
                {fileName}
              </span>
            </div>

            {/* Helper text */}
            <p className="text-xs text-gray-400">
              Formats: JPG, PNG, JPEG – Max 5MB each
            </p>

            {/* Validation message */}
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default NFile;