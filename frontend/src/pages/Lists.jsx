// import React, { useState, useEffect } from "react";
// import ListCard from "../components/ListCard";
// import { MainNav } from "../components/MainNav";

// export default function List() {
//     const baseUrl = import.meta.env.VITE_BASE_URL;

//     const [lists, setLists] = useState([]);

//     const [fields, setFields] = useState({
//         title: "",
//         tags: "",
//         createdBy: "",
//         description: "",
//         whoCanView: "public",
//     });

//     // Show/hide the input fields
//     const [showInputs, setShowInputs] = useState(false);

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async () => {
//         const response = await fetch(`${baseUrl}/list/create`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 title: fields.title,
//                 tags: fields.tags,
//                 description: fields.description,
//                 whoCanView: fields.whoCanView,
//             }),
//             credentials: "include",
//         })
//         const data = await response.json();
//         console.log(data);
//         setLists((prev) => [
//             {
//                 id: data._id,
//                 title: data.title,
//                 tags: data.tags,
//                 createdBy: data.createdBy,
//                 description: data.description,
//                 whoCanView: data.whoCanView,
//             },
//             ...prev,
//         ]);
//         return;
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`${baseUrl}/list/`, {
//                 method: "GET"
//             });
//             const data = await response.json();
//             console.log(data);
//             if (!response.ok)
//                 return;
//             setLists(data.list);
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             <MainNav />
//             <div className="min-h-screen bg-gradient-to-br from-[#2b1b4b] to-[#181028] py-12 px-4">
//                 {/* Create List Button */}
//                 <div className="flex justify-center mb-8">
//                     <button
//                         className="px-8 py-3 rounded-lg font-bold text-white bg-[#7000FF] hover:bg-[#A885FF] shadow-lg transition"
//                         onClick={() => setShowInputs((v) => !v)}
//                     >
//                         {showInputs ? "Cancel" : "Create List"}
//                     </button>
//                 </div>

//                 {/* Input fields shown only when Create List is clicked */}
//                 {showInputs && (
//                     <div className="max-w-2xl mx-auto bg-[#221a39] rounded-2xl p-8 mb-10 shadow-xl border-2 border-[#7000FF]/60">
//                         <h2 className="text-2xl font-bold text-[#A885FF] mb-4">Add New List</h2>
//                         <div className="space-y-5">
//                             <div>
//                                 <label className="block text-[#ded6f3] mb-1">
//                                     Title <span className="text-[#7000FF]">*</span>
//                                 </label>
//                                 <input
//                                     name="title"
//                                     value={fields.title}
//                                     onChange={handleChange}
//                                     className="w-full bg-[#181028] text-white border border-[#7000FF] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A885FF] transition"
//                                     placeholder="List Title"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-[#ded6f3] mb-1">Tags (comma separated)</label>
//                                 <input
//                                     name="tags"
//                                     value={fields.tags}
//                                     onChange={handleChange}
//                                     className="w-full bg-[#181028] text-white border border-[#7000FF] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A885FF] transition"
//                                     placeholder="action, adventure, rpg"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-[#ded6f3] mb-1">
//                                     Created By <span className="text-[#7000FF]">*</span>
//                                 </label>
//                                 <input
//                                     name="createdBy"
//                                     value={fields.createdBy}
//                                     onChange={handleChange}
//                                     className="w-full bg-[#181028] text-white border border-[#7000FF] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A885FF] transition"
//                                     placeholder="Your Name"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-[#ded6f3] mb-1">
//                                     Description <span className="text-[#7000FF]">*</span>
//                                 </label>
//                                 <textarea
//                                     name="description"
//                                     value={fields.description}
//                                     onChange={handleChange}
//                                     className="w-full bg-[#181028] text-white border border-[#7000FF] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A885FF] transition"
//                                     placeholder="Describe your list"
//                                     rows={3}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-[#ded6f3] mb-1">Who Can See</label>
//                                 <select
//                                     name="whoCanView"
//                                     value={fields.whoCanView}
//                                     onChange={handleChange}
//                                     className="w-full bg-[#181028] text-white border border-[#7000FF] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A885FF] transition"
//                                 >
//                                     <option value="public">Public</option>
//                                     <option value="private">Private</option>
//                                     <option value="friends">Friends</option>
//                                 </select>
//                             </div>
//                             <button
//                                 onClick={handleSubmit}
//                                 className="w-full py-3 rounded-lg font-bold text-white bg-[#7000FF] hover:bg-[#A885FF] shadow-lg transition text-lg"
//                             >
//                                 Add List
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Lists Display */}
//                 <div className="max-w-4xl mx-auto space-y-8">
//                     {lists && lists.length === 0 ? (
//                         <div className="text-center text-[#A885FF]">No lists yet. Be the first to add one!</div>
//                     ) : (
//                         lists?.map((list) => (
//                             <ListCard {...list} key={list?._id} />
//                         ))
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// "use client"

import React , { useState, useEffect } from "react"
import { X, ImageIcon, Plus, Eye, Users, Lock } from "lucide-react"
import { MainNav } from "../components/MainNav"
import ListCard from "../components/ListCard"

export default function List() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const [lists, setLists] = useState([])
  const [fields, setFields] = useState({
    title: "",
    tags: "",
    createdBy: "",
    description: "",
    whoCanView: "public",
    coverImage: null,
  })

  // Show/hide the input fields
  const [showInputs, setShowInputs] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle file upload
  const handleFileUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      setFields((prev) => ({
        ...prev,
        coverImage: file,
      }))

      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0])
    }
  }

  // Remove image
  const removeImage = () => {
    setFields((prev) => ({
      ...prev,
      coverImage: null,
    }))
    setImagePreview(null)
  }

  // Reset form
  const resetForm = () => {
    setFields({
      title: "",
      tags: "",
      createdBy: "",
      description: "",
      whoCanView: "public",
      coverImage: null,
    })
    setImagePreview(null)
    setShowInputs(false)
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("title", fields.title)
    formData.append("tags", fields.tags)
    formData.append("description", fields.description)
    formData.append("whoCanView", fields.whoCanView)
    if (fields.coverImage) {
      formData.append("coverImage", fields.coverImage)
    }

    const response = await fetch(`${baseUrl}/list/create`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })

    const data = await response.json()
    console.log(data)

    setLists((prev) => [
      {
        id: data._id,
        title: data.title,
        tags: data.tags,
        createdBy: data.createdBy,
        description: data.description,
        whoCanView: data.whoCanView,
        coverImage: data.coverImage,
      },
      ...prev,
    ])

    resetForm()
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/list/`, {
        method: "GET",
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) return
      setLists(data.list)
    }
    fetchData()
  }, [])

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case "private":
        return <Lock className="w-4 h-4" />
      case "friends":
        return <Users className="w-4 h-4" />
      default:
        return <Eye className="w-4 h-4" />
    }
  }

  return (
    <>
      <MainNav />
      <div className="min-h-screen bg-black text-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Lists</h1>
                <p className="text-gray-400">Create and manage your game lists</p>
              </div>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                onClick={() => setShowInputs((v) => !v)}
              >
                {showInputs ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                {showInputs ? "Cancel" : "Create List"}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Create List Form */}
          {showInputs && (
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 mb-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-6 h-6 text-purple-500" />
                Create New List
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Cover Image */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Cover Image</label>

                  {!imagePreview ? (
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                        dragActive ? "border-purple-500 bg-purple-500/10" : "border-gray-600 hover:border-gray-500"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <ImageIcon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">Drag and drop an image here, or click to select</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Cover preview"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Column - Form Fields */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="title"
                      value={fields.title}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Enter list title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Tags</label>
                    <input
                      name="tags"
                      value={fields.tags}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="action, adventure, rpg"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Created By <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="createdBy"
                      value={fields.createdBy}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Visibility</label>
                    <select
                      name="whoCanView"
                      value={fields.whoCanView}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="public">🌍 Public - Everyone can see</option>
                      <option value="friends">👥 Friends - Only friends can see</option>
                      <option value="private">🔒 Private - Only you can see</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description - Full Width */}
              <div className="mt-6">
                <label className="block text-gray-300 mb-2 font-medium">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={fields.description}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your list..."
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleSubmit}
                  disabled={!fields.title || !fields.description || !fields.createdBy}
                  className="flex-1 py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                >
                  Create List
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Lists Display */}
          <div>
            {lists && lists.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gray-900 rounded-xl p-8 max-w-md mx-auto border border-gray-800">
                  <ImageIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">No lists yet</h3>
                  <p className="text-gray-500 mb-4">Create your first list to get started!</p>
                  <button
                    onClick={() => setShowInputs(true)}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                  >
                    Create List
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lists?.map((list) => (
                  <ListCard {...list} key={list._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
