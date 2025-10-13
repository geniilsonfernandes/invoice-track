"use client";

import { CalendarPicker } from "components/calendar-picker";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { cn } from "lib/utils";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { useEffect } from "react";
import { Controller, useWatch } from "react-hook-form";
import { PAYMENT_TERMS, PAYMENT_TERMS_DAYS } from "../constants";
import { useInvoiceFormContext } from "../hooks/use-invoice-form";
import { InvoiceKeysEnum } from "../schemas/invoiceSchema";
import { PaymentTermsSelect } from "./paymen-terms-select";
import { SectionHeader } from "./section-header";

type InvoiceTermsProps = React.HTMLAttributes<HTMLDivElement> & {};

type AnimatedPresenceWrapperProps = {
  /** Define se o conteúdo deve ser exibido */
  show: boolean;
  /** Conteúdo interno */
  children: React.ReactNode;
  /** Key opcional para o elemento animado */
  motionKey?: string;
  /** Classe opcional */
  className?: string;
  /** Permite customizar a animação */
  animation?: MotionProps;
};

export function AnimatedPresenceWrapper({
  show,
  children,
  motionKey,
  className,
  animation,
}: AnimatedPresenceWrapperProps) {
  const defaultAnimation: MotionProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={motionKey ?? "animated-wrapper"}
          className={className}
          {...(animation ?? defaultAnimation)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const InvoiceTerms: React.FC<InvoiceTermsProps> = ({
  className,
  ...props
}) => {
  const { control, setValue } = useInvoiceFormContext();

  const termsWatch = useWatch({
    control,
    name: InvoiceKeysEnum.PaymentTerms,
  });

  const invoiceDateWatch = useWatch({
    control,
    name: InvoiceKeysEnum.InvoiceDate,
  });

  const dueDateWatch = useWatch({
    control,
    name: InvoiceKeysEnum.DueDate,
  });

  useEffect(() => {
    const daysToAdd = PAYMENT_TERMS_DAYS[termsWatch];

    if (daysToAdd == null || !invoiceDateWatch) return;

    const dueDate = new Date(invoiceDateWatch);
    dueDate.setDate(dueDate.getDate() + daysToAdd);

    setValue(InvoiceKeysEnum.DueDate, dueDate, {
      shouldValidate: true,
    });
  }, [termsWatch, invoiceDateWatch, setValue]);

  // TODO: implementes terms, ex: select net 7, add days to due date, ex: none, remove due date,
  // add terms options in constant file

  function diffInDays(start: Date, end: Date) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / msPerDay); // arredonda para cima
  }

  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      role="region"
      aria-labelledby="invoice-terms-title"
      {...props}
    >
      <SectionHeader
        icon={
          <FileText
            className="h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
        }
        title="Invoice Terms"
        tooltip="This is the invoice terms section. You can add any information here."
        id="invoice-terms-title"
      />

      <div className="col-span-12 grid grid-cols-12 gap-4">
        {/* Payment Terms */}
        <Controller
          control={control}
          name={InvoiceKeysEnum.PaymentTerms}
          render={({ field }) => (
            <PaymentTermsSelect
              {...field}
              aria-label="Payment Terms"
              className="col-span-4"
            />
          )}
        />

        {/* Invoice Date */}
        <Controller
          control={control}
          name={InvoiceKeysEnum.InvoiceDate}
          render={({ field, fieldState }) => (
            <CalendarPicker
              id="invoice-date-picker"
              placeholder="Select invoice date"
              label="Invoice Date"
              aria-label="Invoice Date"
              date={field.value}
              onChange={field.onChange}
              fieldState={fieldState}
              className="col-span-4"
            />
          )}
        />

        {/* Due Date */}
        <AnimatePresence>
          {[PAYMENT_TERMS.NONE, PAYMENT_TERMS.DUE_ON_RECEIPT].includes(
            termsWatch
          ) !== true && (
            <motion.p
              key="due-date-picker"
              className="col-span-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Controller
                control={control}
                name={InvoiceKeysEnum.DueDate}
                render={({ field, fieldState }) => (
                  <CalendarPicker
                    id="due-date-picker"
                    placeholder="Select due date"
                    label="Invoice Due Date"
                    aria-label="Invoice Due Date"
                    date={field.value}
                    onChange={field.onChange}
                    fieldState={fieldState}
                    disabled={{ before: invoiceDateWatch }}
                    className="col-span-4"
                  />
                )}
              />
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Dates */}
      <AnimatePresence>
        {termsWatch === PAYMENT_TERMS.CUSTOM &&
          dueDateWatch &&
          invoiceDateWatch && (
            <motion.p
              key="custom-dates"
              className="text-sm text-muted-foreground [&_svg]:size-4 flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Calendar />
              Invoice Date: {invoiceDateWatch.toLocaleDateString()}
              <ArrowRight />
              Due in {dueDateWatch.toLocaleDateString()} (
              {diffInDays(invoiceDateWatch, dueDateWatch)}{" "}
              {diffInDays(invoiceDateWatch, dueDateWatch) === 1
                ? "day"
                : "days"}
              )
            </motion.p>
          )}
      </AnimatePresence>
    </div>
  );
};
