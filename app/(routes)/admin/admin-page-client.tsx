"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/_utility/api";
import ProjectInterface from "@/app/_types/project.interface";

export default function AdminPageClient({ user }: { user: any }) {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [loading, setLoading] = useState(true);

  // Create & Edit modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectInterface | null>(null);

  // Delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  
  
  // Fetch projects
  useEffect(() => {
    async function load() {
      const data = await apiFetch<ProjectInterface[]>(
        'backend/admin/projects'
      );
      if (data) setProjects(data);
      setLoading(false);
    }
    
    load();
  }, []);
  
  // Handle delete
  async function handleDelete() {
    if (!deleteId) return;

    await apiFetch(`backend/admin/projects/${deleteId}`, {
      method: "DELETE",
    });

    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setShowDeleteModal(false);
  }

  // Handle update
  async function handleUpdate() {
    if (!editingProject) return;

    const updated = await apiFetch<ProjectInterface>(
      `backend/admin/projects/${editingProject.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(editingProject),
      }
    );
    
    if (updated) {
      setProjects((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
    }

    setShowEditModal(false);
  }

  // Handle create
  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLInputElement).value,
      imageUrl: (form.elements.namedItem("imageUrl") as HTMLInputElement).value,
      githubUrl: (form.elements.namedItem("githubUrl") as HTMLInputElement).value,
    };

    const created = await apiFetch<ProjectInterface>(
      `backend/admin/projects`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (created) {
      setProjects((prev) => [...prev, created]);
    }

    setShowCreateModal(false);
  }
  
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading admin panel...
      </div>
    );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-[90%] max-w-4xl p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Admin Panel – Projects</h1>
        
        {/* Create Button */}
        <button
          onClick={() => setShowCreateModal(true)}
          className="mb-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          + Create Project
        </button>
        
        {/* Projects List */}
        <div className="grid grid-cols-1 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-5 bg-gray-50 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingProject(p);
                    setShowEditModal(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setDeleteId(p.id);
                    setShowDeleteModal(true);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----- CREATE MODAL ----- */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Project</h2>

            <form onSubmit={handleCreate} className="space-y-4">
              <input name="title" placeholder="Title" required minLength={5} maxLength={50} className="w-full p-2 border rounded" />
              <textarea name="description" placeholder="Description" required minLength={5} maxLength={200} className="w-full p-2 border rounded" />
              <input name="imageUrl" placeholder="Image URL" className="w-full p-2 border rounded" />
              <input name="githubUrl" placeholder="GitHub URL" className="w-full p-2 border rounded" />

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----- EDIT MODAL ----- */}
      {showEditModal && editingProject && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Project</h2>

            <input
              placeholder="Title"
              value={editingProject.title}
              onChange={(e) =>
                setEditingProject({ ...editingProject, title: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />

            <textarea
              placeholder="Description"
              value={editingProject.description}
              onChange={(e) =>
                setEditingProject({ ...editingProject, description: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />

            <input
              placeholder="Image URL"
              value={editingProject.imageUrl}
              onChange={(e) =>
                setEditingProject({ ...editingProject, imageUrl: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />

            <input
              placeholder="GitHub URL"
              value={editingProject.githubUrl}
              onChange={(e) =>
                setEditingProject({ ...editingProject, githubUrl: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----- DELETE MODAL ----- */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Delete this project?</h3>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
