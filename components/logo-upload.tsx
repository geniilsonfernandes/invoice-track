/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { cn } from "lib/utils";
import { ImagePlus, ImageUp, XIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ActionIcon from "./ui/action";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

// Todo
// [] Implement actual file upload logic
// [] Integrate with form state if necessary
// [] Add validation and error handling
// [] Ensure accessibility compliance
// [] Style the component to match the application's design system
// [] Test the component across different browsers and devices
// [] create blockout for information like file type and size restrictions

const Separator = () => (
  <div className="w-full flex justify-center gap-2">
    {[1, 2, 3].map((i) => (
      <div key={i} className="size-2 rounded-full bg-primary/10" />
    ))}
  </div>
);

const FilePreview = ({ file }: { file: File }) => {
  return (
    <div className="flex items-center space-x-2 border p-1 rounded-md">
      <span className="size-10 text-xs rounded-sm bg-secondary border flex items-center justify-center text-muted-foreground">
        PDF
      </span>
      <div className="flex flex-col">
        <span className="text-sm text-foreground">{file.name}</span>
        <span className="text-xs text-muted-foreground">
          {Math.round(file.size / 1024)} KB
        </span>
      </div>

      <ActionIcon className="ml-auto bg-transparent border-none">
        <XIcon />
      </ActionIcon>
    </div>
  );
};

type FileWithPreview = File & { preview: string };

const Dropzone = () => {
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    Object.assign(selectedFile, {
      preview: URL.createObjectURL(selectedFile),
    });
    setFile(selectedFile as FileWithPreview);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // exemplo: só aceita imagens
  });

  const [size, setSize] = useState<string>("large");

  return (
    <div className="space-y-4">
      {file ? (
        <div
          className="mx-auto flex items-center justify-center h-32 w-32 relative group"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <ImagePlus className="size-4 hidden  group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
          <img
            src={file.preview}
            alt="Preview"
            className={cn("h-32 border group-hover:opacity-10")}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      ) : (
        <div
          className={cn(
            "h-32 w-full border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors",
            isDragActive && "border-primary bg-primary/10",
            isDragAccept && "border-green-500",
            isDragReject && "border-red-500"
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <ImageUp />
          <h1 className="text-sm font-bold my-1">Insert Logo</h1>
          <span className="text-sm text-muted-foreground">
            Drag and drop, or click to select file
          </span>
        </div>
      )}
      <div>
        <Label>
          <span className="text-sm font-semibold">Size</span>
        </Label>
        <Slider className="mt-4" defaultValue={[25]} min={20} max={80} />
      </div>

      <Button size="lg" fullWidth disabled={!file}>
        Save changes
      </Button>
    </div>
  );
};

{
  /* <button className="size-8 flex items-center justify-center p-1 border rounded-md hover:bg-secondary/50 transition-colors">
  <ChevronLeft className="w-4 h-4" />
</button>; */
}

type DialogProps = {
  children: React.ReactNode;
};

const UploadDialog: React.FC<DialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-sm" showCloseButton={false}>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <Dropzone />
      </DialogContent>
    </Dialog>
  );
};

export const LogoUpload = () => {
  return (
    <UploadDialog>
      <div className="w-full">
        <div className="h-24 w-full border-2 gap-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/10 transition-colors text-muted-foreground">
          <ImageUp />
          <p className="text-sm font-bold ">Upload Logo</p>
        </div>
      </div>
    </UploadDialog>
  );
};
