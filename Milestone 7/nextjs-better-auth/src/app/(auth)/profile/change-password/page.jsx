"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";

import { changePassword } from "@/lib/auth-client";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async (
    e
  ) => {
    e.preventDefault();

    if (isLoading) return;

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (currentPassword === newPassword) {
      toast.error(
        "New password must be different from current password"
      );
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true,
      });

      if (error) {
        toast.error(error.message || "Failed to change password");
        return;
      }

      toast.success("Password changed successfully!");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      router.push("/profile");
    } catch (error) {
      console.error("Change password error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto w-full max-w-md px-4 py-8">
      <Form onSubmit={handleChangePassword}>
        <Fieldset className="w-full">
          <Fieldset.Legend>Change Password</Fieldset.Legend>

          <Description>
            Update your password to keep your account secure.
          </Description>

          <FieldGroup>
            {/* Current Password */}
            <TextField name="currentPassword" isRequired>
              <Label>Current Password</Label>

              <div className="relative w-full">
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                  className="pr-12"
                />

                <Button
                  type="button"
                  isIconOnly
                  variant="ghost"
                  size="sm"
                  aria-label={
                    showCurrentPassword
                      ? "Hide current password"
                      : "Show current password"
                  }
                  onPress={() =>
                    setShowCurrentPassword((prev) => !prev)
                  }
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2"
                >
                  {showCurrentPassword ? "🙈" : "👁️"}
                </Button>
              </div>

              <FieldError />
            </TextField>

            {/* New Password */}
            <TextField
              name="newPassword"
              isRequired
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                return null;
              }}
            >
              <Label>New Password</Label>

              <div className="relative w-full">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                  className="pr-12"
                />

                <Button
                  type="button"
                  isIconOnly
                  variant="ghost"
                  size="sm"
                  aria-label={
                    showNewPassword
                      ? "Hide new password"
                      : "Show new password"
                  }
                  onPress={() =>
                    setShowNewPassword((prev) => !prev)
                  }
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2"
                >
                  {showNewPassword ? "🙈" : "👁️"}
                </Button>
              </div>

              <FieldError />
            </TextField>

            {/* Confirm New Password */}
            <TextField
              name="confirmPassword"
              isRequired
              validate={(value) => {
                if (value !== newPassword) {
                  return "Passwords do not match";
                }
                return null;
              }}
            >
              <Label>Confirm New Password</Label>

              <div className="relative w-full">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  className="pr-12"
                />

                <Button
                  type="button"
                  isIconOnly
                  variant="ghost"
                  size="sm"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onPress={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </Button>
              </div>

              <FieldError />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions>
            <div className="flex w-full flex-wrap gap-3">
              <Button type="submit" isDisabled={isLoading}>
                {isLoading
                  ? "Changing Password..."
                  : "Change Password"}
              </Button>

              <Button
                type="button"
                variant="secondary"
                onPress={() => router.back()}
                isDisabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}