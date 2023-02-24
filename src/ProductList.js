import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { name as productName, removeProduct, updateProducts } from './store/slices/productSlice';
import { name as manufacturerName } from './store/slices/manufacturerSlice';

import ProductCard from './components/ProductCard/ProductCard';
import Modal from './components/Modal/Modal';
import ProductForm from './components/ProductForm/ProductForm';
import RemoveContainer from './components/RemoveContainer/RemoveContainer';
import Filter from './components/Filter/Filter';
import Button from './components/Button/Button';

import './ProductList.css';

const NEW_PRODUCT_ID = 'NEW_PRODUCT_ID';

function ProductList() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [titleFilter, setTitleFilter] = useState('');
  const [manufacturerFilter, setManufacturerFilter] = useState('');
  const [removeId, setRemoveId] = useState('');
  const [editId, setEditId] = useState('');
  const products = useSelector(store => store[productName]);
  const manufacturers = useSelector(store => store[manufacturerName]);
  const productList = useMemo(() => (
    Object.values(products).filter(({ title, manufacturer }) => {
      const checkTitle = titleFilter ? title.toLowerCase().includes(titleFilter) : true;
      const checkManufacturer = manufacturerFilter ? manufacturer === manufacturerFilter : true;
      if ((!titleFilter && !manufacturerFilter) || (checkTitle && checkManufacturer)) {
        return true;
      }
      return false;
    })
  ), [products, titleFilter, manufacturerFilter]);
  const selectedProduct = useMemo(() => products[editId], [editId, products]);

  const handleTitleFilterChange = useCallback((value) => setTitleFilter(value), []);

  const handleManufacturerFilterChange = useCallback((value) => setManufacturerFilter(value), []);

  const handleAddProduct = useCallback(() => {
    setEditId(NEW_PRODUCT_ID);
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    if (editId) setEditId('');
    if (removeId) setRemoveId('');
    setIsOpen(false);
  }, [editId, removeId]);

  const handleEditProduct = useCallback((id) => () => {
    setEditId(id)
    setIsOpen(true);
  }, [])

  const handleRemoveProduct = useCallback((id) => () => {
    setRemoveId(id)
    setIsOpen(true);
  }, [])

  const handleSubmitProduct = useCallback((values) => {
    dispatch(updateProducts(values));
    handleCloseModal();
  }, [dispatch, handleCloseModal])

  const handleSubmitProductRemove = useCallback(() => {
    dispatch(removeProduct(removeId));
    handleCloseModal();
  }, [removeId, dispatch, handleCloseModal])

  return (
    <div className="ProductList">
      <div className="ProductList-Actions">
        <Filter
          onTitleChange={handleTitleFilterChange}
          onManufacturerChange={handleManufacturerFilterChange}
        />
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>
      {productList.map(product => {
        const { id, manufacturer } = product;
        return (
          <ProductCard
            key={id}
            {...product}
            manufacturer={manufacturers[manufacturer].name}
            onEdit={handleEditProduct(id)}
            onRemove={handleRemoveProduct(id)}
          />
        )
      })}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {!!editId && (
          <ProductForm
            initialValues={selectedProduct}
            onSubmit={handleSubmitProduct}
          />
        )}
        {!!removeId && (
          <RemoveContainer
            onCancel={handleCloseModal}
            onRemove={handleSubmitProductRemove}
          />
        )}
      </Modal>
    </div>
  );
}

export default ProductList;
