import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { fetchInvoiceById } from "@/services/invoiceService";

interface InvoiceDetailsModalProps {
  invoiceId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function InvoiceDetailsModal({
  invoiceId,
  isOpen,
  onClose,
}: InvoiceDetailsModalProps) {
  const { data: invoice, isLoading } = useQuery({
    queryKey: ["invoice", invoiceId],
    queryFn: () => (invoiceId ? fetchInvoiceById(invoiceId) : null),
    enabled: !!invoiceId,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invoice Details</DialogTitle>
          <DialogDescription>
            View details for the selected invoice
          </DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded animate-pulse" />
          </div>
        ) : (
          invoice && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Vendor</h4>
                <p className="text-sm">{invoice.vendor_name}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Amount</h4>
                <p className="text-sm">${Number(invoice.amount).toFixed(2)}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Due Date</h4>
                <p className="text-sm">
                  {new Date(invoice.due_date).toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Description</h4>
                <p className="text-sm">{invoice.description || "N/A"}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Created At</h4>
                <p className="text-sm">
                  {new Date(invoice.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Status</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    invoice.paid
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {invoice.paid ? "Paid" : "Pending"}
                </span>
              </div>
            </div>
          )
        )}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
