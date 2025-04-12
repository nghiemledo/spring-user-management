import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import React from "react";

type AddDialogProps = {
    isOpen: boolean;
    user: { id: number, email: string, fullName: string, address: string, phone: string, company?: string } | null;
    onClose: () => void;
    onSave: (updatedUser: any) => void;
};

export const AddDialog = ({ isOpen, user, onClose, onSave }: AddDialogProps) => {
    const [addingUser, setAddingUser] = React.useState({
        id: 0,
        email: "",
        fullName: "",
        address: "",
        phone: "",
        company: "",
    });

    React.useEffect(() => {
        if (user) {
            setAddingUser(user as any);
        }
    }, [user]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogDescription>Add new user.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                    <Input
                        placeholder="Email"
                        value={addingUser.email}
                        onChange={(e) => setAddingUser({ ...addingUser, email: e.target.value })}
                    />
                    <Input
                        placeholder="Full Name"
                        value={addingUser.fullName}
                        onChange={(e) => setAddingUser({ ...addingUser, fullName: e.target.value })}
                    />
                    <Input
                        placeholder="Address"
                        value={addingUser.address}
                        onChange={(e) => setAddingUser({ ...addingUser, address: e.target.value })}
                    />
                    <Input
                        placeholder="Phone"
                        value={addingUser.phone}
                        onChange={(e) => setAddingUser({ ...addingUser, phone: e.target.value })}
                    />
                    <Input
                        placeholder="Company"
                        value={addingUser.company || ""}
                        onChange={(e) => setAddingUser({ ...addingUser, company: e.target.value })}
                    />

                    <DialogFooter>
                        <Button variant="outline">
                            <DialogClose
                                className="cursor-pointer"
                            >Cancel</DialogClose>
                        </Button>
                        <Button
                            type="button"
                            onClick={() => onSave(addingUser)}
                            className="cursor-pointer"
                        >
                            Add User
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};