import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Success() {
    const [index, setIndex] = useState(0);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    const nextMembers = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    };

    const checkIndex = (index) => {
        if (index < 0) {
            return members.length - 1;
        } else if (index > members.length - 1) {
            return 0;
        }
        return index;
    };

    const prevMembers = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    };

    const fetchMembers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/members');
            setMembers(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    // Seçili üyeyi alma
    const selectedMember = members[index];

    return (
        <div className='successPage'>
          
            <button className='prevNextBtn' onClick={prevMembers}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
            </button>
            <div>
                {selectedMember && (
                    <div className='membersCard' key={selectedMember.id}>
                        <h1>{selectedMember.result}</h1>
                        <h2>{selectedMember.member}</h2>
                        <p>{selectedMember.content}</p>
                        <img src={selectedMember.photo} alt={selectedMember.member} />
                    </div>
                )}
            </div>
            <button className='prevNextBtn' onClick={nextMembers}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </button>
        </div>
    );
}

export default Success;
