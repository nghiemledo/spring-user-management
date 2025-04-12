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
import axios from "axios"
import React, { useContext } from "react";
import { toast } from "sonner"
import { AuthContext } from "@/context/AuthContext"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  // {
  //     "username": "nghiemledo@gmail.com",
  //     "password": "123456",
  //     "fullName": "nghiem le do",
  //     "phone": "0123456789",
  //     "address": "26 Dong Da Street"
  // }

  const { login } = useContext(AuthContext)

  const onLogin = async (e: any) => {
    e.preventDefault()
    const { username, password } = formData;
    try {
      if (username === "" || password === "") {
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
      const response = await axios.post("http://localhost:8000/api/login", {
        username, password,
      })
      if (response.status === 400) {
        toast("Login failed", {
          description: <span className="text-white">Please check your email and password</span>,
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
      if (response.status === 200) {
        login(response.data.data);
        
        localStorage.setItem("token", response.data.data);
        navigate('/users')
      } else {
        toast("Login failed", {
          description: <span className="text-white">Please check your email and password</span>,
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
      }
    }
    catch (error) {
      toast("Login failed", {
        description: <span className="text-white">Please check your email and password</span>,
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
          <form onSubmit={onLogin}>
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
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Register
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
