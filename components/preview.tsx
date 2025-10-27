"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { Send } from "lucide-react";
import { DialogProps } from "vaul";
import { PdfTemplate } from "../templates";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

const PreviewDialog: React.FC<DialogProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg" >
          <Send /> Save Proposal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full ">
        <DialogTitle>Preview</DialogTitle>

        <PDFViewer className="w-full h-svh max-h-[80vh]" showToolbar={false}>
          <PdfTemplate />
        </PDFViewer>
      </DialogContent>
    </Dialog>
  );
};

export const Preview = () => {
  return <PreviewDialog />;
};
