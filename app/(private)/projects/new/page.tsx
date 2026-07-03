"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/components/private/ui/Input/Input";
import Button from "@/components/private/ui/Button/Button";

import { addProject } from "@/lib/projects/store/projects.store";

export default function NewProjectPage() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [client, setClient] = useState<string>("");

  const handleSubmit = () => {
    addProject({
      id: crypto.randomUUID(),
      name,
      client,
      status: "active",
    });

    router.push("/admin/projects");
  };

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-xl font-semibold text-[var(--dashboard-text)]">
        Crear proyecto
      </h1>

      <Input
        label="Nombre del proyecto"
        value={name}
        onChange={setName}
      />

      <Input
        label="Cliente"
        value={client}
        onChange={setClient}
      />

      <Button
        label="Crear proyecto"
        onClick={handleSubmit}
      />
    </div>
  );
}