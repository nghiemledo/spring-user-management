import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

type DeleteDialogProps = {
    isOpen: boolean;
    onDelete: () => void;
    onClose: () => void;
};

export const DeleteDialog = ({ isOpen, onDelete, onClose }: DeleteDialogProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        <DialogClose>Cancel</DialogClose>
                    </Button>
                    <Button
                        type="button"
                        className="cursor-pointer"
                        variant={'destructive'}
                        onClick={onDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
