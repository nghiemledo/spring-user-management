import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import React from "react"
import axios from "axios"
import { toast } from "sonner"

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const navigate = useNavigate()
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    // {
    //     "username": "nghiemledo@gmail.com",
    //     "password": "123456",
    //     "fullName": "nghiem le do",
    //     "phone": "0123456789",
    //     "address": "26 Dong Da Street"
    // }

    const onRegister = async (e: any) => {
        e.preventDefault()
        const { username, password, confirmPassword } = formData;
        try {
            if (username === "" || password === "" || confirmPassword === "") {
                toast("Please fill in full fields", {
                    description: <span className="text-white">Please fill in full fields</span>,
                    duration: 2000,
                    action: {
                        label: "Retry",
                        onClick: () => {
                            console.log("Retrying login...");
                        }
                    },
                    dismissible: true,
                    icon: "⚠️",
                    style: {
                        backgroundColor: "red",
                        color: "white",
                    },
                });
                return;
            }
            if (password !== confirmPassword) {
                toast("Confirm password does not match", {
                    description: <span className="text-white">Confirm password does not match</span>,
                    duration: 2000,
                    action: {
                        label: "Retry",
                        onClick: () => {
                            console.log("Retrying register...");
                        }
                    },
                    dismissible: true,
                    icon: "⚠️",
                    style: {
                        backgroundColor: "red",
                        color: "white",
                    },
                });
                return;
            }
            const response = await axios.post("http://localhost:8000/api/register", {
                username, password,
                fullName: "nghiem le do",
                phone: "0123456789",
                address: "26 Dong Da Street"
            })
            if (response.status === 200) {
                console.log(response.data);
                navigate('/login')
            }
        }
        catch (error) {
            toast("Password and confirm password do not match", {
                description: <span className="text-white">Register failed</span>,
                duration: 2000,
                action: {
                    label: "Retry",
                    onClick: () => {
                        console.log("Retrying register...");
                    }
                },
                dismissible: true,
                icon: "⚠️",
                style: {
                    backgroundColor: "red",
                    color: "white",
                },
            });
            console.log(error);
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onRegister}>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@gmail.com"
                                        required
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input id="password" type="password" required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center">
                                        <Label htmlFor="confirm-password">Confirm password</Label>
                                    </div>
                                    <Input id="confirm-password" type="password" required
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" className="w-full cursor-pointer">
                                    Register
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
