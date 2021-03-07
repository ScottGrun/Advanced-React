import useForm from '../hooks/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    name: 'Scott',
    description: 'Demo',
    price: 100,
  });

  return (
    <form>
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
        Name
        <input
          type="number"
          id="price"
          name="price"
          placeholder="0"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <button type="button" onClick={clearForm}>
        Reset
      </button>
    </form>
  );
}
