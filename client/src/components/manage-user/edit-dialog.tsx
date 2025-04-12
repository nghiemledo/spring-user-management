import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import React from "react";

type EditDialogProps = {
    isOpen: boolean;
    user: { id: number, email: string, fullName: string, address: string, phone: string, company?: string } | null;
    onClose: () => void;
    onSave: (updatedUser: any) => void;
};

export const EditDialog = ({ isOpen, user, onClose, onSave }: EditDialogProps) => {
    const [editingUser, setEditingUser] = React.useState(user);

    React.useEffect(() => {
        setEditingUser(user);
    }, [user]);

    if (!editingUser) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>Edit user details.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                    <Input
                        placeholder="Email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <Input
                        placeholder="Full Name"
                        value={editingUser.fullName}
                        onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
                    />
                    <Input
                        placeholder="Address"
                        value={editingUser.address}
                        onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
                    />
                    <Input
                        placeholder="Phone"
                        value={editingUser.phone}
                        onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                    />
                    <Input
                        placeholder="Company"
                        value={editingUser.company || ""}
                        onChange={(e) => setEditingUser({ ...editingUser, company: e.target.value })}
                    />

                    <DialogFooter>
                        <Button variant="outline">
                            <DialogClose>Cancel</DialogClose>
                        </Button>
                        <Button
                            type="button"
                            onClick={() => onSave(editingUser)}
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};
