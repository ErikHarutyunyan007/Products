import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

import Button from '../Button/Button';

import './ProductForm.css';

const ProductForm = ({ initialValues, onSubmit }) => {
  const manufacturers = useSelector(state => Object.values(state.manufacturers));
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: +value || value,
    }))
  }, [setValues])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    onSubmit({
      ...values,
      ...(!values.id && { id: uuidv4() }),
    })
  }, [values, onSubmit])

  return (
    <form className="ProductForm" onSubmit={handleSubmit}>
      <input
        className="ProductForm-Input"
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        className="ProductForm-Input"
        name="description"
        placeholder="Description"
        value={values.description}
        onChange={handleChange}
      />
      <input
        className="ProductForm-Input"
        name="content"
        placeholder="Content"
        value={values.content}
        onChange={handleChange}
      />
      <input
        className="ProductForm-Input"
        name="price"
        placeholder="Price"
        type="number"
        value={values.price}
        onChange={handleChange}
      />
      <select
        className="ProductForm-Input"
        name="manufacturer"
        value={values.manufacturer}
        onChange={handleChange}
      >
        <option hidden>Select Manufacturer</option>
        {manufacturers.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      <input
        className="ProductForm-Input"
        name="quantity"
        placeholder="Quantity"
        type="number"
        value={values.quantity}
        onChange={handleChange}
      />
      <Button type="submit">Save</Button>
    </form>
  )
}

ProductForm.defaultProps = {
  initialValues: {
    title: '',
    description: '',
    content: '',
    price: '',
    manufacturer: '',
    quantity: '',
  }
}

export default ProductForm;
