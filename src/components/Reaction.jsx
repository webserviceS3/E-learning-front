// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Emojis } from '../constants';
import axios from 'axios';

const Reaction = () => {

    const [selectedEmoji, setSelectedEmoji] = useState("");
    const [emojiClicks, setEmojiClicks] = useState({});

    const handleClick = async (emojiName) => {
        try {
            await axios.post(`/api/emojis/clicks/${emojiName}`);
            setSelectedEmoji(emojiName);
        } catch (error) {
            console.error('Error incrementing click count:', error);
        }
    };

    useEffect(() => {
        const fetchEmojiClicks = async () => {
            try {
                const response = await axios.get('/api/emojis/clicks');
                setEmojiClicks(response.data);
            } catch (error) {
                console.error('Error fetching emoji clicks:', error);
            }
        };

        fetchEmojiClicks();
    }, []);

    return (
        <div className='w-full font-palanquin'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl font-semibold font-palanquin leading-normal'>What do you <span className="">think</span>?</h2>
                <p className='mt-1 font-montserrat text-slate-gray text-sm font-medium'>{Object.values(emojiClicks).reduce((acc, curr) => acc + curr, 0)} Responses</p>
                <div className='flex flex-row gap-2 sm:gap-4 md:gap-12 mt-7'>
                    {Emojis.map((emoji, i) => {
                        return (
                            <div key={i} className={`flex-1 flex flex-col items-center justify-center w-14 ${emoji.name === selectedEmoji ? 'border border-slate-gray px-5 py-3 rounded-xl' : ''}`} onClick={() => handleClick(emoji.name)}>
                                <img src={emoji.imgURL} alt={emoji.name} width={40} height={40} className='object-contain m-0' />
                                <p className='mt-2 font-montserrat text-[14px] font-medium'>{emojiClicks[emoji.clicked]}</p>
                                <p className='mt-1 font-montserrat text-[14px] font-medium'>{emoji.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reaction;