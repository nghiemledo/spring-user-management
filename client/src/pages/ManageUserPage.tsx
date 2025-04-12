import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios";
import React from "react";
import { Eye, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ViewDialog } from "@/components/manage-user/view-dialog";
import { EditDialog } from "@/components/manage-user/edit-dialog";
import { DeleteDialog } from "@/components/manage-user/delete-dialog";
import { AddDialog } from "@/components/manage-user/add-dialog";
import { AuthContext } from "@/context/AuthContext";

export function ManageUserPage() {
    const {logout} = React.useContext(AuthContext)
    const [data, setData] = React.useState([]);
    const [isView, setIsView] = React.useState(false);
    const [viewingUser, setViewingUser] = React.useState<{
        id: number;
        email: string;
        fullName: string;
        address: string;
        phone: string;
        company?: string;
    } | null>(null);

    const [isEdit, setIsEdit] = React.useState(false);
    const [editingUser, setEditingUser] = React.useState<{
        id: number;
        email: string;
        fullName: string;
        address: string;
        phone: string;
        company?: string;
    } | null>(null);

    const [isDelete, setIsDelete] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState<number | null>(null);

    const [isAdd, setIsAdd] = React.useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/users",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleAddUser = async (newUser: any) => {
        try {
            console.log("Adding user:", newUser);
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found. Please log in again.");
            }

            const { id, ...userData } = newUser;
            const response = await axios.post("http://localhost:8000/api/users", userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Add response:", response.data);
            setIsAdd(false);
            fetchData();
        } catch (error: any) {
            console.error("Add error:", error.response?.data, error.response?.status);
            alert(`Error: ${error.response?.data?.message || error.message || "Failed to add user"}`);
        }
    };

    const handleSaveEdit = async (updatedUser: any) => {
        try {
            await axios.put(`http://localhost:8000/api/users/${updatedUser.id}`, updatedUser, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setIsEdit(false);
            fetchData();
        } catch (error) {
            console.error("Update error", error);
        }
    };

    const handleDelete = async () => {
        try {
            if (deleteId !== null) {
                await axios.delete(`http://localhost:8000/api/users/${deleteId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setIsDelete(false);
                setDeleteId(null);
                fetchData();
            }
        } catch (error) {
            console.error("Delete error", error);
        }
    };

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container mx-auto p-4 justify-center mt-10">
            <div className="flex flex-row items-center justify-between mb-5">
                <h1 className="font-bold text-2xl">Manage User</h1>
                <div className="flex flex-row items-center gap-3">

                    {/* <Button variant="default" onClick={() => setIsAdd(true)} className="cursor-pointer">< Plus />Add User</Button> */}
                    <Button
                        variant="destructive"
                        onClick={() => logout()}
                    >
                        Logout
                    </Button>
                </div>

            </div>
            <Table>
                <TableCaption>A list of registered users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user: any) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.fullName}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.company || "N/A"}</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="ghost" className="cursor-pointer">
                                            <MoreHorizontal />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem
                                            onClick={async () => {
                                                const res = await axios.get(`http://localhost:8000/api/users/${user.id}`, {
                                                    headers: {
                                                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                                                    },
                                                });
                                                setViewingUser(res.data);
                                                setIsView(true);
                                            }}

                                            className="cursor-pointer flex flex-row items-center gap-2">
                                            <Eye className="w-2 h-2" />
                                            <span>View</span>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                setEditingUser(user);
                                                setIsEdit(true);
                                            }}
                                            className="cursor-pointer flex flex-row items-center gap-2">
                                            <Pencil className="w-2 h-2" />
                                            <span>Edit</span>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                setDeleteId(user.id);
                                                setIsDelete(true);
                                            }}
                                            className="cursor-pointer flex flex-row items-center gap-2">
                                            <Trash2 className="w-2 h-2" />
                                            <span>Delete</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={6}>Total Users</TableCell>
                        <TableCell className="text-right">{data.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <ViewDialog isOpen={isView} user={viewingUser} onClose={() => setIsView(false)} />
            <AddDialog isOpen={isAdd} user={null} onClose={() => setIsAdd(false)} onSave={handleAddUser} />
            <EditDialog isOpen={isEdit} user={editingUser} onClose={() => setIsEdit(false)} onSave={handleSaveEdit} />
            <DeleteDialog isOpen={isDelete} onDelete={handleDelete} onClose={() => setIsDelete(false)} />
        </div>
    )
}