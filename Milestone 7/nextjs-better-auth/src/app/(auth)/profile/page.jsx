"use client";

import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
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

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("change form data", userData);

    try {
      const resData = await updateUser({
        name: userData.name,
      });

      console.log("after change the profile name", resData);

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);

      toast.error("Failed to update profile!");
    }
  };

  return (
    <Form
      className="w-full max-w-96 container mx-auto"
      onSubmit={handleUpdateUser}
    >
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>

        <Description>Update your profile information.</Description>

        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Update your name" />
            <FieldError />
          </TextField>
        </FieldGroup>

        <Fieldset.Actions>
          <Button size="sm" type="submit">
            <FloppyDisk />
            Save changes
          </Button>

          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>

      <div className="w-full max-w-96 container mx-auto mt-4">
        <Button
          className="w-full"
          variant="secondary"
          onPress={() => router.push("/profile/change-password")}
        >
          Change Password
        </Button>
      </div>
    </Form>
  );
}
