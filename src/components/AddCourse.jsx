import React, { useEffect, useRef, useState } from 'react';
import Courservice from '../services/Courservice';
import { async } from 'regenerator-runtime';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const categories = ["Grammer", "Conjugation", "Orthography", "Writing"];

const AddCourse = () => {


    const [data, setData] = useState([]);
    // const [data, setData] = useState({
    //     title: "",
    //     courseSection: "",
    //     paragraphes: []
    // });

    const [newTitle, setNewTitle] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newParagraph, setNewParagraph] = useState('');

    const [addedTitle, setAddedTitle] = useState('');
    const [addedCategory, setAddedCategory] = useState('');

    const [selectedTitleIndex, setSelectedTitleIndex] = useState(null);

    const [paragraphs, setParagraphs] = useState([]);
    const [editingParagraphs, setEditingParagraphs] = useState({});

    const [editingTitleIndex, setEditingTitleIndex] = useState(null);
    const [editingCategoryIndex, setEditingCategoryIndex] = useState(null);
    const [editingParagraphIndex, setEditingParagraphIndex] = useState(null);

    const [titleCounters, setTitleCounters] = useState({});

    const textAreaRef = useRef(null);

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleAddedTitleChange = (e) => {
        setAddedTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setNewCategory(e.target.value);
    };

    const handleAddedCategoryChange = (e) => {
        setAddedCategory(e.target.value);
    };

    const handleParagraphChange = (e) => {
        setNewParagraph(e.target.value);
    };

    const isTitleUnique = (title) => {
        return !data.some((item) => item.title === title);
    };

    const handleAddTitle = () => {

        // Check if a title and category already exist
        const titleExists = data.some((item) => item.title.trim() !== '');
        const categoryExists = data.some((item) => item.category.trim() !== '');

        if (titleExists || categoryExists) {
            alert('Only one title and one category are allowed!');
            return;
        }

        if (isTitleUnique(newTitle) && newTitle.trim() && newCategory.trim()) {
            const newItem = {
                title: newTitle,
                paragraphs: [],
                category: newCategory,
            };

            setData([...data, newItem]);
            setNewTitle('');
            setNewCategory('');
            setNewParagraph('');
        } else {
            alert('Title and Category must not be empty, and Title must be unique!');
        }
    }

    const handleEdit = (index, isTitle, isCategory) => {
        if (isTitle) {
            setEditingTitleIndex(index);
        } else if (isCategory) {
            setEditingCategoryIndex(index);
        }
    };

    const handleSaveEdit = (isTitle, isCategory) => {
        const newData = [...data];
        const index = isTitle ? editingTitleIndex : isCategory ? editingCategoryIndex : null;
        const newValue = isTitle ? addedTitle : isCategory ? addedCategory : null;

        if (newValue.trim()) {
            if (isTitle) {
                newData[index].title = newValue;
            } else if (isCategory) {
                newData[index].category = newValue;
            }
            setData(newData);
            setEditingTitleIndex(null);
            setEditingCategoryIndex(null);
        } else {
            alert('Value must not be empty!');
        }
    };

    const handleDelete = (index, isTitle, isCategory) => {
        const newData = [...data];
        if (isTitle) {
            newData.splice(index, 1);
            setSelectedTitleIndex(null);
            setEditingTitleIndex(null);
            setEditingCategoryIndex(null);
        } else if (isCategory) {
            newData[index].category = '';
            setEditingCategoryIndex(null);
        }
        setData(newData);
    };

    const handleAddParagraph = () => {
        if (newParagraph.trim()) {
            let newData = [...data];
            let newTitleIndex = selectedTitleIndex !== null ? selectedTitleIndex : newData.length - 1;

            // console.log(newTitleIndex)

            if (newTitleIndex === -1) {
                alert('Please add a title before adding paragraphs.');
                return;
            }

            // Initialize the counter for the title if it doesn't exist
            if (!titleCounters[newTitleIndex]) {
                titleCounters[newTitleIndex] = 1;
                setTitleCounters({ ...titleCounters });
            }

            const newParagraphData = {
                id: titleCounters[newTitleIndex]++, // Use the counter as a unique ID
                content: newParagraph,
            };

            newData[newTitleIndex].paragraphs.push(newParagraphData);

            setData(newData);
            setNewParagraph('');
        } else {
            alert('Paragraph must not be empty!');
        }
    }

    const handleEditParagraph = (index, paragraphIndex) => {
        // setEditingParagraphIndex(index);

        // setEditingParagraphs({ ...editingParagraphs, [index]: data[index].paragraphs.content });
        if (data[index] && data[index].paragraphs) {
            setEditingParagraphIndex(paragraphIndex);
            setEditingParagraphs({ ...editingParagraphs, [paragraphIndex]: data[index].paragraphs[paragraphIndex].content });
        } else {
            console.error('Selected title or paragraphs array does not exist.');
        }
    };

    const handleSaveEditParagraph = (index, paragraphIndex) => {
        const newData = [...data];
        newData[index].paragraphs[paragraphIndex].content = editingParagraphs[paragraphIndex];

        setData(newData);
        setEditingParagraphIndex(null);
        setEditingParagraphs({});
    };

    const handleDeleteParagraph = (index) => {
        const newData = [...data];
        // newData[index].paragraphs = [];

        const updatedData = newData.map((item, e) => {
            const newParagraphs = [...item.paragraphs];

            newParagraphs.splice(index, 1);

            return {
                ...item,
                paragraphs: newParagraphs
            };
        });

        setEditingParagraphIndex(null);

        setData(updatedData);
        setEditingParagraphs({});
    };

    
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (Array.isArray(data)) {
            const formattedData = data.map(item => ({
                title: item.title || "",
                category: item.category || "",
                paragraphs: Array.isArray(item.paragraphs) ? item.paragraphs.map(paragraph => paragraph.content || "") : []
            }));

            console.log("Données formatées:", formattedData[0]);
            const dt = {
                title: formattedData.title,
                courseSection: formattedData.category,
                paragraphes: formattedData.paragraphs
            }
            console.log(dt);
            try {
                const token = localStorage.getItem('token');
                const headers = {
                    Authorization: `Bearer ${token}`,
                };
                const response = await axios.post('http://localhost:8080/api/test/addCour', formattedData[0], { headers });
                alert("you have add cours");
                navigate("/admin")
            } catch (error) {
                console.error("Erreur lors de la soumission :", error);
            }
        } else {
            console.error("La propriété 'data' n'est pas un tableau.");
        }
    };





    useEffect(() => {
        
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [newParagraph]);

    return (
        <div className='w-full mt-10 font-montserrat'>
            <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                <button className='flex-1 bg-green-500 text-white p-2 rounded-full' onClick={handleAddTitle}>Add Course Title</button>
                <input type='text' placeholder='Enter Title' value={newTitle} onChange={handleTitleChange} className='flex-[4_4_0%] border border-slate-gray p-3 rounded-xl' />
                <select value={newCategory} onChange={handleCategoryChange} className='border border-slate-gray p-3 flex-1 rounded-xl'>
                    <option value="" disabled>
                        Select Category
                    </option>
                    <option value="Grammar">
                        Grammer
                    </option>
                    <option value="Conjugation">Conjugation</option>
                    <option value="Orthography">Orthography</option>
                    <option value="Writing">Writing</option>
                </select>
            </div>
            <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                <button onClick={handleAddParagraph} className='flex-1 bg-green-500 text-white p-2 rounded-full'>Add Course Section</button>
                <textarea type='text' placeholder='Enter Course Section' value={newParagraph} onChange={handleParagraphChange} className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl' rows={2} ref={textAreaRef} />
            </div>
            {data.map((item, index) => (
                <div key={index}>
                    {editingTitleIndex === index ? (
                        <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                            <button className='flex-1 bg-green-500 text-white p-2 rounded-full' onClick={() => handleSaveEdit(true, false)}>Save Title</button>
                            <input type='text' placeholder='Enter Title' value={addedTitle} onChange={handleAddedTitleChange} className='flex-[4_4_0%] border border-slate-gray p-3 rounded-full' />
                        </div>
                    ) : (
                        <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                            <button className='flex-1 bg-yellow-500 text-white p-2 rounded-full' onClick={() => handleEdit(index, true, false)}>Edit Title</button>
                            <p className='flex-[4_4_0%] border border-slate-gray p-3 rounded-lg'>{item.title}</p>
                            <button className='flex-1 bg-red-500 text-white p-2 rounded-full' onClick={() => handleDelete(index, true, false)}>Remove Title</button>
                        </div>
                    )}
                    {editingCategoryIndex === index ? (
                        <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                            <button className='flex-1 bg-green-500 text-white p-2 rounded-full' onClick={() => handleSaveEdit(false, true)}>Save Category</button>
                            <select
                                value={addedCategory}
                                onChange={handleAddedCategoryChange}
                                className='flex-[4_4_0%] border border-slate-gray p-3 rounded-full'
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category ? category : "Select Category"}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                            <button className='flex-1 bg-yellow-500 text-white p-2 rounded-full' onClick={() => handleEdit(index, false, true)}>Edit Category</button>
                            <p className='flex-[4_4_0%] border border-slate-gray p-3 rounded-lg'>{item.category}</p>
                            <button className='flex-1 bg-red-500 text-white p-2 rounded-full' onClick={() => handleDelete(index, false, true)}>Remove Category</button>
                        </div>
                    )}

                    {/* Paragraphs Section */}
                    {item.paragraphs.map((paragraph, paragraphIndex) => (
                        <div key={paragraphIndex}>
                            {editingParagraphIndex === paragraphIndex ? (
                                <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                                    <button className='flex-1 bg-green-500 text-white p-2 rounded-full' onClick={() => handleSaveEditParagraph(index, paragraphIndex)}>Save Paragraph</button>
                                    <textarea placeholder='Enter Title' value={editingParagraphs[paragraphIndex]} onChange={(e) => setEditingParagraphs({ ...editingParagraphs, [paragraphIndex]: e.target.value })} className='flex-[4_4_0%] border border-slate-gray p-3 rounded-lg' />
                                </div>
                            ) : (
                                <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                                    <button className='flex-1 bg-yellow-500 text-white p-2 rounded-full' onClick={() => handleEditParagraph(index, paragraphIndex)}>Edit Paragraph</button>
                                    <p className='flex-[4_4_0%] border border-slate-gray p-3 rounded-lg'>{paragraph.content}</p>
                                    <button className='flex-1 bg-red-500 text-white p-2 rounded-full' onClick={() => handleDeleteParagraph(paragraphIndex)}>Remove Paragraph</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
                <button onClick={handleSubmit} className='flex-1 bg-blue-500 text-white p-2 rounded-full'>
                    Submit
                </button>
                <div className='flex-[5_5_0%]'>

                </div>
            </div>
        </div>
    )
}

export default AddCourse