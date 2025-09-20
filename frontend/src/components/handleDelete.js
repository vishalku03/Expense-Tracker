function Items({ data, handleDelete }) {
  return (
    <div className='bg-gray-700 p-4 rounded-xl text-white flex justify-between items-center'>
      <div>{data.category} - ₹{data.amount}</div>
      <div>{new Date(data.date).toLocaleDateString()}</div>
      <button onClick={() => handleDelete(data._id)} className='bg-red-600 px-3 py-1 rounded-xl'>Delete</button>
    </div>
  );
}

export default Items;
