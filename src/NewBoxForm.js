import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({newBox}) => {
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        color: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };

      const userInput = evt => {
        evt.preventDefault();
        newBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", color: "" });
      };

    return (
        <div>
            <form onSubmit={userInput}>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input onChange={handleChange} type="text" name="width" value={formData.width} id="width"></input>
                </div>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input onChange={handleChange} type="text" name="height" value={formData.height} id="height"></input>
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <input onChange={handleChange} type="text" name="color" value={formData.color} id="color"></input>
                </div>
                <button>Add new box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;