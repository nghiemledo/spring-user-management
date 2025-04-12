import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type ViewDialogProps = {
    isOpen: boolean;
    user: { id: number, email: string, fullName: string, address: string, phone: string, company?: string } | null;
    onClose: () => void;
};

export const ViewDialog = ({ isOpen, user, onClose }: ViewDialogProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>User Detail</DialogTitle>
                    <DialogDescription>View user details.</DialogDescription>
                </DialogHeader>
                {user && (
                    <div className="space-y-2 mt-4">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Full Name:</strong> {user.fullName}</p>
                        <p><strong>Address:</strong> {user.address}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Company:</strong> {user.company || "N/A"}</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
