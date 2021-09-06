import React, { useState } from 'react'
import Modal from 'react-modal'
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AddMovie = ({add}) => {

    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('')
    const [rating, setRating] = useState(1)
    const [image, setImage] = useState('')
    // const [taswira, setTaswira] = useState('')
    const [date, setDate] = useState('')
    const handleRating = (x)=>setRating(x)
  
    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit = (e)=>{

      e.preventDefault();

      const newMovie = {

        id:Math.random(),
        name,
        image,
        // taswira:image
        date,
        rating
      
      }

      add(newMovie)
      closeModal()

    }
    
    return (
        <div>
            <button className='btn' onClick={openModal}>Add Movies</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <form className='form' onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <br />
          <label>Date</label>
          <br />
          
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
          <br />
          <label>Rating</label>
          <br />
          <StarRating handleRating={handleRating} rating={rating}/>
          <br />
          <label>Poster</label>
          <br />
          <input type="url" value={image} onChange={(e)=>setImage(e.target.value)} />
          <br />
          <button type='submit' className='btn-form'>Confirm</button>
          <button className='btn-form'>Cancel</button>
        </form>
      </Modal>
        </div>
    )
}

export default AddMovie
