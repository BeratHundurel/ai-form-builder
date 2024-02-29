"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

const FormGenerator = (props: Props) => {
   const [open, setOpen] = useState(false);
   const onFormCreate = () => {
      setOpen(true);
   };
   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <Button onClick={onFormCreate}>Create Form</Button>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Create New Form</DialogTitle>
            </DialogHeader>
            <form>
               <div className="grid gap-4 py-4">
                  <Textarea
                     id="description"
                     name="description"
                     required
                     placeholder="Share what your form is about, who is it for, and what information you would like to collect."
                  ></Textarea>
               </div>
            </form>
            <DialogFooter>
               <Button variant="link">Create Manually</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default FormGenerator;
