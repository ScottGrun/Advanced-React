// Custom Hook
import useForm from '../hooks/useForm';

// Styles
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    name: 'Scott',
    description: 'Demo',
    price: 100,
    image: '',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset aria-busy={false}>
        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            value={inputs.image}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="0"
            value={inputs.price}
            onChange={handleChange}
          />
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
