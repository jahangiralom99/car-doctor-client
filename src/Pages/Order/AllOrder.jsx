import PropTypes from 'prop-types';

const AllOrder = ({ order, handleDelete, handleUpdateOrder }) => {
  //   console.log(order);
  const { img, title, customerName, date, price, _id, status } = order || {};
  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle btn-outline text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {customerName}</div>
            </div>
          </div>
        </td>
        <td>
          <h3 className="font-bold">{title}</h3>
        </td>
        <td>
          <h3 className="font-bold">{price}</h3>
        </td>
        <td className="font-bold">{date}</td>
        <th>
          {status ? (
            <span className="font-bold text-primary">Confirmed</span>
          ) : (
            <button
              onClick={() => handleUpdateOrder(_id)}
              className="btn btn-outline text-red-500 btn-sm"
            >
              Please Confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

AllOrder.propTypes = {
    order: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdateOrder: PropTypes.func.isRequired,
}

export default AllOrder;
